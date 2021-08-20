/* Amplify Params - DO NOT EDIT
	API_SERVERLESSECOMMERCE_GRAPHQLAPIENDPOINTOUTPUT
	API_SERVERLESSECOMMERCE_GRAPHQLAPIIDOUTPUT
	API_SERVERLESSECOMMERCE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const http = require("http");
const https = require("https");

const gql = require("graphql-tag");
const graphql = require("graphql");
const AWS = require("aws-sdk");
const { print } = graphql;

const AWSXRay = require("aws-xray-sdk-core");

AWSXRay.captureHTTPsGlobal(http);
AWSXRay.captureHTTPsGlobal(https);
AWSXRay.capturePromise();

const axios = require("axios");
const { inspect } = require("util");

const updateOrder = gql`
  mutation MyMutation($input: ID!) {
    updateOrder(input: { id: $input, status: IN_PROGRESS }) {
      status
      updatedAt
      id
      createdAt
      date
      userId
      totalOrder
    }
  }
`;

exports.handler = async (event) => {
  try {
    console.log({ event });
    await new Promise((resolve) => {
      setTimeout(resolve, 10e3);
    });

    const promises = event.Records.filter(
      (record) => record.eventName === "INSERT"
    )
      .map((record) =>
        AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
      )
      .filter((order) => order.status === "NEW")
      .map(async (order) =>
        axios({
          url: process.env.API_SERVERLESSECOMMERCE_GRAPHQLAPIENDPOINTOUTPUT,
          method: "post",
          headers: {
            "x-api-key":
              process.env.API_SERVERLESSECOMMERCE_GRAPHQLAPIKEYOUTPUT,
          },
          data: {
            query: print(updateOrder),
            variables: {
              input: order.id,
            },
          },
        })
      );

    const responses = await Promise.all(promises);

    console.log({
      responses: inspect(
        responses.map(({ status, data }) => ({
          status,
          data,
        })),
        { depth: null }
      ),
    });

    const body = {
      message: "successfully executed the mutation",
    };

    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.log("error running mutation: ", err);
  }
};
