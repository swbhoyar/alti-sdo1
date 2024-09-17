public class Top_Ten_Lead_Prioritization {
 
    @InvocableMethod(
      // Matches the API Name of the template
      CapabilityType='FlexTemplate://Lead_Prioritization')
    public static List<Response> getPrompt(List<Request> requests) {
        Request input = requests[0];
        String LeadName='';
        String leadURL='';
        String Call_Interaction_Details='';
        String Email_Interaction_Details='';
        List<Lead> leadList = [SELECT Owner.Id,Owner.Name, Company,Name,Status,(select id,  type,  Description, ActivityDate from tasks ) FROM Lead where Owner.Id=:UserInfo.getUserId() AND Status!='Converted' ];
        List<Response> responses = new List<Response>();
        Response output = new Response();
        responses.add(output);
        String JSONString = JSON.serialize(leadList);
        output.Prompt = 'Use Lead And its Related Tasks in  following info:'+JSONString;
        // account_1 matches the API Name for the input
        //output.Prompt += '\nLeadName: ' + input.account_1.Name;
        //output.Prompt += '\nAccount 2: ' + input.account_2.Name;
        //output.Prompt += '\nCase Number: ' + input.case_1.CaseNumber;

        return responses;
    }
 
    // Type and API Name of all variables must match the template
    public class Request {
        @InvocableVariable
        public User User_1;
    }

    public class Response {
         @InvocableVariable
        public String Prompt;
    }
}