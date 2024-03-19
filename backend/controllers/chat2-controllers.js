import OpenAI from "openai";
import { LoginUser } from "../models/Scam-user.js";


const openai = new OpenAI({
    apiKey: "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",
  });


async function getScam(name) {
    const scam = await LoginUser.findOne({ name: name });
    return JSON.stringify(`Post: ${scamResponse.title}\nDistrict: ${scamResponse.district}
    \nScam: ${scamResponse.scam} \nUpvotes: ${scamResponse.upvotes} \nDownvotes: ${scamResponse.downvotes}`);
  }
  
  async function getByTitle(title) {
    console.log(title);
    const  scamResponse = await LoginUser.findOne({
      title: title,
      });
    
    console.log(scamResponse);
    return JSON.stringify(`Post: ${scamResponse.title}\nDistrict: ${scamResponse.district}
    \nScam: ${scamResponse.scam} \nUpvotes: ${scamResponse.upvotes} \nDownvotes: ${scamResponse.downvotes}`);
  }
  
  async function getByDistrict(dis) {
      console.log(dis);
      const  scamResponse = await LoginUser.findOne({
          district: dis,
        }).limit(1);
      
      console.log(scamResponse);
      return JSON.stringify(`Post: ${scamResponse.title}\nDistrict: ${scamResponse.district}
      \nScam: ${scamResponse.scam} \nUpvotes: ${scamResponse.upvotes} \nDownvotes: ${scamResponse.downvotes}`);
    }
  
    async function getByUpvotes(up) {
      console.log(up);
      const  scamResponse = await LoginUser.findOne({
          upvotes: up,
        });
      
      console.log(scamResponse);
      return JSON.stringify(`Post: ${scamResponse.title}\nDistrict: ${scamResponse.district}
      \nScam: ${scamResponse.scam} \nUpvotes: ${scamResponse.upvotes} \nDownvotes: ${scamResponse.downvotes}`);
    }
  
    async function getByDownvotes(down) {
      console.log(down);
      const  scamResponse = await LoginUser.findOne({
          downvotes: down,
        });
      
      console.log(scamResponse);
      return JSON.stringify(`Post: ${scamResponse.title}\nDistrict: ${scamResponse.district}
      \nScam: ${scamResponse.scam} \nUpvotes: ${scamResponse.upvotes} \nDownvotes: ${scamResponse.downvotes}`);
    }
  
  async function getTotalPostsNumber() {
    const complaint = await LoginUser.find().count();
    return JSON.stringify(complaint);
  }
  
  // async function getTotalComplaintsAgainstEntity(name) {
  //   const complaint = await Complaint.find({ complaintAgainst: name }).count();
  //   return JSON.stringify(complaint);
  // }
  

  async function runConversation(prompt) {
    // Step 1: send the conversation and available functions to GPT
    const messages = [{ role: "user", content: prompt }];
  
    const functions = [
      {
        name: "get_scam",
        description:
          "This function retrieves a scam they experienced.",
        parameters: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description:
                "The body of the scam.",
            },
          },
          required: ["name"],
        },
      },
      {
        name: "get_by_title",
        description: "Retrieve scam posts based on more data.",
        parameters: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "The title of scam.",
            },
            
          },
          required: ["title"],
        },
      },
      {
          name: "get_by_district",
          description: "Retrieve scam posts based on more data.",
          parameters: {
            type: "object",
            properties: {
              dis: {
                type: "string",
                description: "The district of where the scam happened.",
              },
              
            },
            required: ["dis"],
          },
        },
        {
          name: "get_by_upvotes",
          description: "Retrieve scam posts based on more data.",
          parameters: {
            type: "object",
            properties: {
              dis: {
                type: "integer",
                description: "The number of upvotes the scampost has.",
              },
              
            },
            required: ["up"],
          },
        },
        {
          name: "get_by_downvotes",
          description: "Retrieve scam posts based on more data.",
          parameters: {
            type: "object",
            properties: {
              dis: {
                type: "integer",
                description: "The number of downvotes the scampost has.",
              },
              
            },
            required: ["down"],
          },
        },
      {
        name: "get_Total_scams_number",
        description: "Retrieve total numbers of scams.",
        parameters: {
          type: "object",
          properties: {},
        },
      },
    
     
    ];
  
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      functions: functions,
      function_call:"auto"
     
    });
  
    const responseMessage = response.choices[0].message;
    console.log(responseMessage);
    if (responseMessage.content) return responseMessage;
    // Step 2: check if GPT wanted to call a function
  
    if (responseMessage.function_call) {
      // Step 3: call the function
      // Note: the JSON response may not always be valid; be sure to handle errors
      const availableFunctions = {
          get_scam: getScam,
          get_by_title: getByTitle,
          get_by_district: getByDistrict,
          get_by_upvotes: getByUpvotes,
          get_by_downvotes: getByDownvotes,
          get_Total_scams_number: getTotalPostsNumber,
     
      }; // only one function in this example, but you can have multiple
      const functionName = responseMessage.function_call.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);
      let functionResponse = await functionToCall(...Object.values(functionArgs));
      // if (functionName === "get_by_title") {
      //   functionResponse = await functionToCall(
      //     functionArgs.title,
      //     functionArgs.scam
      //   );
      // } else if (functionName === "get_scam") {
      //   functionResponse = await functionToCall(functionArgs.name);
      // }
      // else if (functionName === "get_by_district") {
      //     functionResponse = await functionToCall(functionArgs.dis);
      //   }
      //     else if (functionName === "get_by_upvotes") {
      //         functionResponse = await functionToCall(functionArgs.up);
      //       }
      //         else if (functionName === "get_by_downvotes") {
      //             functionResponse = await functionToCall(functionArgs.down);
      //         }
      
      // else if (functionName === "get_Total_scams_number") {
      //   functionResponse = await functionToCall();
      // } 
      // // else if (functionName === "get_total_complaint_against_entity") {
      // //   functionResponse = await functionToCall(functionArgs.name);
      // // } 
      // else if (functionName === "get_total_scams") {
      //   functionResponse = await functionToCall();
      // }
      console.log(functionResponse);
      // Step 4: send the info on the function call and function response to GPT
      messages.push(responseMessage); // extend conversation with assistant's reply
      messages.push({
        role: "function",
        name: functionName,
        content: `${functionResponse}`,
      }); // extend conversation with function response
      // console.log(messages[2].content)
      const secondResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      }); 
      // get a new response from GPT where it can see the function response
      return secondResponse.choices[0].message;
      
    }
  }
  
  export default runConversation;