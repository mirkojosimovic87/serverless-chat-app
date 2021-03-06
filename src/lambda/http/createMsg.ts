import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult} from "aws-lambda";
import createMsg from "../../logic/createMsg";


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const userId = event.requestContext.authorizer.principalId

    const result = await createMsg(userId, JSON.parse(event.body).to, 'text', JSON.parse(event.body).msg, null, '0')

    return {
        statusCode: 201,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result)
    }
}