"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { api } from "@/lib/api"

interface Flag {
  id: string
  student_name: string
  student_email: string
  flag_type: string
  description: string
  timestamp: string
}

interface TestDetail {
  id: string
  name: string
  parent_test_url: string
  flags: Flag[]
}

export default function TestDetailPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const params = useParams()
  const testId = params.id as string

  const [test, setTest] = useState<TestDetail | null>(null)
  const [pageLoading, setPageLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user && testId) {
      fetchTestDetail()
    }
  }, [user, testId])

  const fetchTestDetail = async () => {
    try {
      const data = await api.tests.get(testId)
      setTest(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load test details")
    } finally {
      setPageLoading(false)
    }
  }

  if (loading || pageLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || !test) {
    return null
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" onClick={() => router.back()}>
          ← Back
        </Button>
      </div>

      <Card className="p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">{test.name || "Test Details"}</h1>
        <a
          href={test.parent_test_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {test.parent_test_url}
        </a>
      </Card>

      {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">{error}</div>}

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{user.role === "admin" ? "All Student Flags" : "Your Flags"}</h2>

        {test.flags && test.flags.length > 0 ? (
          <div className="space-y-4">
            {test.flags.map((flag) => (
              <div key={flag.id} className="p-4 border rounded-lg bg-gray-50">
                {user.role === "admin" && (
                  <div className="mb-2">
                    <p className="font-semibold">{flag.student_name}</p>
                    <p className="text-sm text-gray-600">{flag.student_email}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Flag Type:</span> {flag.flag_type}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Description:</span> {flag.description}
                  </p>
                  <p className="text-xs text-gray-600">{new Date(flag.timestamp).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No flags recorded for this test.</p>
        )}
      </Card>
    </main>
  )
}
