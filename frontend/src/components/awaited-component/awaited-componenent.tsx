import React, { Suspense, ReactNode } from 'react'

export interface AwaitedComponentProps<Resolve> {
  resolve: Promise<Resolve> 
  errorElement?: ReactNode 
  loadingElement?: ReactNode 
  children: ReactNode | ((value: Resolve) => ReactNode) 
}

export function AwaitedComponent<Resolve>({
  resolve,
  loadingElement = <div>Loading...</div>, 
  errorElement = <div>Error occurred!</div>, 
  children,
}: AwaitedComponentProps<Resolve>) {
  const [resolvedData, setResolvedData] = React.useState<Resolve | null>(null)
  const [error, setError] = React.useState<Error | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await resolve
        setResolvedData(data)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [resolve])

  if (isLoading) {
    return <>{loadingElement}</>
  }

  if (error) {
    return <>{errorElement}</>
  }

  return (
    <>
      {typeof children === 'function' ? children(resolvedData as Resolve) : children}
    </>
  )
}
