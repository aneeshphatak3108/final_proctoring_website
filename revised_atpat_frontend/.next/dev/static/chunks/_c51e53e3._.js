(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tests/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { api } from "@/lib/api"

interface StudentFlagSummary {
  mis_id: string
  student_name?: string
  student_email?: string
  to_review: boolean
}

export default function TestDetailPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const params = useParams()
  const testId = params.id as string

  const [students, setStudents] = useState<StudentFlagSummary[]>([])
  const [pageLoading, setPageLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!loading && !user) router.push("/login")
  }, [user, loading, router])

  useEffect(() => {
    if (user && testId) fetchStudentList()
  }, [user, testId])

  const fetchStudentList = async () => {
    try {
      const data = await api.flags.getFlags(testId)
      if (data.status === "success") {
        // The backend will now return one document per student
        const sorted = data.flags.sort((a: any, b: any) =>
          b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1
        )
        setStudents(sorted)
      } else {
        setError("Failed to load student list")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load student list")
    } finally {
      setPageLoading(false)
    }
  }

  const toggleReview = async (student: StudentFlagSummary) => {
    try {
      const response = await api.flags.updateReview(testId, student.mis_id, !student.to_review)
      if (response.status === "success") {
        setStudents((prev) =>
          prev
            .map((s) =>
              s.mis_id === student.mis_id ? { ...s, to_review: !s.to_review } : s
            )
            .sort((a, b) => (b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1))
        )
      } else setError("Failed to update review status")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update review status")
    }
  }

  if (loading || pageLoading)
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  if (!user) return null

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" onClick={() => router.back()}>
          ← Back
        </Button>
      </div>

      <Card className="p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Test Overview</h1>
        <p className="text-gray-600">
          {user.role === "admin"
            ? "Select a student to view their flag summary."
            : "Your test activity summary."}
        </p>
      </Card>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">{error}</div>
      )}

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Students</h2>

        {students.length > 0 ? (
          <div className="space-y-3">
            {students.map((s, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer transition ${
                  s.to_review
                    ? "border-green-500 bg-green-50 hover:bg-green-100"
                    : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => router.push(`/tests/${testId}/${s.mis_id}`)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{s.student_name || "Unknown Student"}</p>
                    <p className="text-sm text-gray-600">{s.student_email || "No email"}</p>
                  </div>

                  <Button
                    variant={s.to_review ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleReview(s)
                    }}
                  >
                    {s.to_review ? "Marked for Review" : "Not Marked"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No student data available for this test.</p>
        )}
      </Card>
    </main>
  )
}
*/ /*
"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { api } from "@/lib/api"

interface StudentFlagSummary {
  mis_id: string
  student_name?: string
  student_email?: string
  to_review: boolean
}

export default function TestDetailPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const params = useParams()
  const testId = params.id as string

  const [students, setStudents] = useState<StudentFlagSummary[]>([])
  const [pageLoading, setPageLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!loading && !user) router.push("/login")
  }, [user, loading, router])

  useEffect(() => {
    if (user && testId) fetchStudentList()
  }, [user, testId])

  const fetchStudentList = async () => {
    try {
      const data = await api.flags.getFlags(testId)
      if (data.status === "success") {
        const sorted = data.flags.sort((a: any, b: any) =>
          b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1
        )
        setStudents(sorted)
      } else {
        setError("Failed to load student list")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load student list")
    } finally {
      setPageLoading(false)
    }
  }

  const toggleReview = async (student: StudentFlagSummary) => {
    try {
      const response = await api.flags.updateReview(testId, student.mis_id, !student.to_review)
      if (response.status === "success") {
        setStudents((prev) =>
          prev
            .map((s) =>
              s.mis_id === student.mis_id ? { ...s, to_review: !s.to_review } : s
            )
            .sort((a, b) => (b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1))
        )
      } else setError("Failed to update review status")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update review status")
    }
  }

  const deleteFlag = async (student: StudentFlagSummary) => {
    if (!confirm(`Are you sure you want to delete ${student.student_name || student.mis_id}'s flag?`)) return
    try {
      const response = await api.flags.deleteFlag(testId, student.mis_id)
      if (response.status === "success") {
        setStudents((prev) => prev.filter((s) => s.mis_id !== student.mis_id))
      } else {
        setError("Failed to delete flag")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete flag")
    }
  }

  if (loading || pageLoading)
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  if (!user) return null

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" onClick={() => router.back()}>
          ← Back
        </Button>
      </div>

      <Card className="p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Test Overview</h1>
        <p className="text-gray-600">
          {user.role === "admin"
            ? "Select a student to view their flag summary."
            : "Your test activity summary."}
        </p>
      </Card>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">{error}</div>
      )}

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Students</h2>

        {students.length > 0 ? (
          <div className="space-y-3">
            {students.map((s, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer transition ${
                  s.to_review
                    ? "border-green-500 bg-green-50 hover:bg-green-100"
                    : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => router.push(`/tests/${testId}/${s.mis_id}`)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{s.student_name || "Unknown Student"}</p>
                    <p className="text-sm text-gray-600">{s.student_email || "No email"}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant={s.to_review ? "default" : "outline"}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleReview(s)
                      }}
                    >
                      {s.to_review ? "Marked for Review" : "Not Marked"}
                    </Button>

                    {user.role === "admin" && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteFlag(s)
                        }}
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No student data available for this test.</p>
        )}
      </Card>
    </main>
  )
}
*/ __turbopack_context__.s([
    "default",
    ()=>TestDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function TestDetailPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const testId = params.id;
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pageLoading, setPageLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestDetailPage.useEffect": ()=>{
            if (!loading && !user) router.push("/login");
        }
    }["TestDetailPage.useEffect"], [
        user,
        loading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestDetailPage.useEffect": ()=>{
            if (user && testId) fetchStudentList();
        }
    }["TestDetailPage.useEffect"], [
        user,
        testId
    ]);
    const fetchStudentList = async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].flags.getFlags(testId);
            if (data.status === "success") {
                const sorted = data.flags.sort((a, b)=>b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1);
                setStudents(sorted);
            } else {
                setError("Failed to load student list");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load student list");
        } finally{
            setPageLoading(false);
        }
    };
    const toggleReview = async (student)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].flags.updateReview(testId, student.mis_id, !student.to_review);
            if (response.status === "success") {
                setStudents((prev)=>prev.map((s)=>s.mis_id === student.mis_id ? {
                            ...s,
                            to_review: !s.to_review
                        } : s).sort((a, b)=>b.to_review === a.to_review ? 0 : b.to_review ? 1 : -1));
            } else setError("Failed to update review status");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update review status");
        }
    };
    const deleteFlag = async (student)=>{
        if (!confirm(`Are you sure you want to delete ${student.student_name || student.mis_id}'s flag?`)) return;
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].flags.deleteFlag(testId, student.mis_id);
            if (response.status === "success") {
                setStudents((prev)=>prev.filter((s)=>s.mis_id !== student.mis_id));
            } else {
                setError("Failed to delete flag");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete flag");
        }
    };
    if (loading || pageLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/page.tsx",
        lineNumber: 402,
        columnNumber: 12
    }, this);
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-6xl mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    onClick: ()=>router.back(),
                    children: "← Back"
                }, void 0, false, {
                    fileName: "[project]/app/tests/[id]/page.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[id]/page.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2",
                        children: "Test Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/page.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: user.role === "admin" ? "Select a student to view their flag summary." : "Your test activity summary."
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/page.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[id]/page.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/tests/[id]/page.tsx",
                lineNumber: 424,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Students"
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/page.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    students.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 border rounded-lg cursor-pointer transition ${s.to_review ? "border-green-500 bg-green-50 hover:bg-green-100" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`,
                                onClick: ()=>router.push(`/tests/${testId}/${s.mis_id}`),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold",
                                                    children: s.student_name || "Unknown Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: s.student_email || "No email"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/page.tsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: s.to_review ? "default" : "outline",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        toggleReview(s);
                                                    },
                                                    children: s.to_review ? "Marked for Review" : "Not Marked"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "bg-black text-white hover:bg-gray-800",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        deleteFlag(s);
                                                    },
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tests/[id]/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 17
                                }, this)
                            }, s.mis_id, false, {
                                fileName: "[project]/app/tests/[id]/page.tsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/page.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No student data available for this test."
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/page.tsx",
                        lineNumber: 478,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[id]/page.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tests/[id]/page.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_s(TestDetailPage, "SzAzLiFCxViWsfvgYNmNvkVVPqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TestDetailPage;
var _c;
__turbopack_context__.k.register(_c, "TestDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c51e53e3._.js.map