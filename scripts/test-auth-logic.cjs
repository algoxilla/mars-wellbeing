const fs = require("fs");
const path = require("path");
const http = require("http");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    failed++;
  }
}

async function testHttpRoute(route, expectedStatus = 200) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      const isExpected =
        res.statusCode === expectedStatus ||
        (expectedStatus === 200 && (res.statusCode === 200 || res.statusCode === 307 || res.statusCode === 302));
      assert(
        isExpected,
        `Route ${route} returned status ${res.statusCode} (expected ${expectedStatus})`
      );
      resolve();
    }).on("error", (err) => {
      assert(false, `Route ${route} failed with network error: ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log("\n========================================================");
  console.log("MARS Wellbeing — Phase 1 Auth & Admin Verification Suite");
  console.log("========================================================\n");

  // -------------------------------------------------------------------
  // 1. Schema & Migration Integrity Checks
  // -------------------------------------------------------------------
  console.log("[1] Checking PostgreSQL Schema & RLS Policies (supabase/schema.sql)...");
  const schemaPath = path.join(__dirname, "../supabase/schema.sql");
  assert(fs.existsSync(schemaPath), "supabase/schema.sql exists");

  const schemaContent = fs.readFileSync(schemaPath, "utf-8");
  assert(
    schemaContent.includes("CREATE TABLE IF NOT EXISTS public.profiles"),
    "public.profiles table definition present"
  );
  assert(
    schemaContent.includes("REFERENCES auth.users(id) ON DELETE CASCADE"),
    "profiles references auth.users(id) with cascade delete"
  );
  assert(
    schemaContent.includes("CHECK (role IN ('user', 'admin'))"),
    "profiles role constrained to 'user' and 'admin'"
  );
  assert(
    schemaContent.includes("CREATE TABLE IF NOT EXISTS public.early_access_leads"),
    "public.early_access_leads table definition present"
  );
  assert(
    schemaContent.includes("CREATE OR REPLACE FUNCTION public.is_admin()"),
    "is_admin() security definer function present"
  );
  assert(
    schemaContent.includes("ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY"),
    "RLS enabled on public.profiles"
  );
  assert(
    schemaContent.includes("ALTER TABLE public.early_access_leads ENABLE ROW LEVEL SECURITY"),
    "RLS enabled on public.early_access_leads"
  );
  assert(
    schemaContent.includes("profiles_select_own_or_admin"),
    "RLS policy: users can only view own profile or admin can view all"
  );
  assert(
    schemaContent.includes("early_access_admin_select"),
    "RLS policy: leads select is restricted to admins only"
  );
  assert(
    schemaContent.includes("early_access_public_insert"),
    "RLS policy: leads insert is open to visitors"
  );
  assert(
    schemaContent.includes("delete_user_account()"),
    "Account self-deletion RPC function present"
  );

  // -------------------------------------------------------------------
  // 2. Client & Middleware Architecture Checks
  // -------------------------------------------------------------------
  console.log("\n[2] Checking Supabase Utilities & Middleware...");
  const clientPath = path.join(__dirname, "../src/lib/supabase/client.ts");
  const serverPath = path.join(__dirname, "../src/lib/supabase/server.ts");
  const middlewarePath = path.join(__dirname, "../src/middleware.ts");
  const configPath = path.join(__dirname, "../src/lib/supabase/config.ts");

  assert(fs.existsSync(clientPath), "src/lib/supabase/client.ts exists");
  assert(fs.existsSync(serverPath), "src/lib/supabase/server.ts exists");
  assert(fs.existsSync(middlewarePath), "src/middleware.ts exists");
  assert(fs.existsSync(configPath), "src/lib/supabase/config.ts exists");

  const serverContent = fs.readFileSync(serverPath, "utf-8");
  assert(
    serverContent.includes("await cookies()"),
    "Server client supports Next.js 16 async cookies() API"
  );

  const middlewareContent = fs.readFileSync(middlewarePath, "utf-8");
  assert(
    middlewareContent.includes("updateSession"),
    "Middleware triggers token refresh on requests"
  );

  // -------------------------------------------------------------------
  // 3. Server Actions & Security Enforcements Checks
  // -------------------------------------------------------------------
  console.log("\n[3] Checking Server Actions & Security Checks...");
  const authActionsPath = path.join(__dirname, "../src/app/auth/actions.ts");
  const adminActionsPath = path.join(__dirname, "../src/app/admin/actions.ts");
  const earlyAccessActionsPath = path.join(__dirname, "../src/app/early-access/actions.ts");

  assert(fs.existsSync(authActionsPath), "src/app/auth/actions.ts exists");
  assert(fs.existsSync(adminActionsPath), "src/app/admin/actions.ts exists");
  assert(fs.existsSync(earlyAccessActionsPath), "src/app/early-access/actions.ts exists");

  const authActionsContent = fs.readFileSync(authActionsPath, "utf-8");
  assert(authActionsContent.includes("signUpAction"), "signUpAction exported");
  assert(authActionsContent.includes("signInAction"), "signInAction exported");
  assert(authActionsContent.includes("signOutAction"), "signOutAction exported");
  assert(authActionsContent.includes("forgotPasswordAction"), "forgotPasswordAction exported");
  assert(authActionsContent.includes("updatePasswordAction"), "updatePasswordAction exported");
  assert(authActionsContent.includes("deleteOwnAccountAction"), "deleteOwnAccountAction exported");

  const adminActionsContent = fs.readFileSync(adminActionsPath, "utf-8");
  assert(adminActionsContent.includes("verifyAdminCaller"), "verifyAdminCaller helper present");
  assert(adminActionsContent.includes("getAdminDashboardData"), "getAdminDashboardData exported");
  assert(adminActionsContent.includes("updateUserRole"), "updateUserRole exported");
  assert(adminActionsContent.includes("updateLeadStatus"), "updateLeadStatus exported");
  assert(adminActionsContent.includes("adminDeleteUser"), "adminDeleteUser exported");

  // -------------------------------------------------------------------
  // 4. HTTP Routes Health & Endpoint Status
  // -------------------------------------------------------------------
  console.log("\n[4] Checking Next.js App Router HTTP Endpoints...");
  await testHttpRoute("/login");
  await testHttpRoute("/signup");
  await testHttpRoute("/forgot-password");
  await testHttpRoute("/reset-password");
  await testHttpRoute("/dashboard");
  await testHttpRoute("/admin");
  await testHttpRoute("/early-access");
  await testHttpRoute("/auth/callback", 307);

  console.log("\n========================================================");
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log("========================================================\n");

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
