import {APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda'


const handleResult = (body: string): APIGatewayProxyResult => ({
  statusCode: 200,
  body
})

const handleError = (error: Error): APIGatewayProxyResult => {
  console.error(error)

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: error.message,
    }),
  }
}

const createApiHandler = ():APIGatewayProxyHandler => async (event, context) => {
  try {
    return handleResult(JSON.stringify({event, context}))
  }
  catch(error) {
    return handleError(error)
  }
}

export const handler = createApiHandler()