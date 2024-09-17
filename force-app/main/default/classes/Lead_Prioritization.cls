public class Lead_Prioritization {
 
    @InvocableMethod(
      // Matches the API Name of the template
      /*CapabilityType='FlexTemplate://Lead_Prioritization'*/
    CapabilityType='PromptTemplateType://einstein_gpt__fieldCompletion')
    public static List<Response> getPrompt(List<Request> requests) {
        Request input = requests[0];
        String LeadName='';
        String leadURL='';
        String Call_Interaction_Details='';
        String Email_Interaction_Details='';
       // List<Lead> leadList = [SELECT Owner.Id,Owner.Name, Company,Name,Status,Email,(select id,  type,  Description, ActivityDate from tasks ) FROM Lead where Owner.Id=:UserInfo.getUserId() AND Status!='Converted' ];
        List<Lead> leadList = new List<Lead>();
        for(lead ld:[SELECT Owner.Id,Owner.Name, Company,Name,Status,Email,(select id,  type,  Description, ActivityDate from tasks ) FROM Lead where Owner.Id=:UserInfo.getUserId() AND Status!='Converted' ]){
            if(!ld.tasks.isEmpty()){
               leadList.add(ld);
            }
        }
        /*
        SET<ID> leadIdList = new SET<ID>();
		for(lead ld:leadList){
            leadIdList.add(ld.Id);
            system.debug('lead name-'+ld.Name+'-taskList.size-'+ld.tasks.size());
            }
           list<EmailMessage> emailList=[Select toIds ,toAddress  from emailmessage where fromAddress = 'rasingh@altimetrik.com'];
            system.debug('emailList-'+emailList);
            list<EmailMessageRelation> emailmsglist=[select RelationAddress,RelationId,RelationObjectType,RelationType from EmailMessageRelation where emailMessageId ='02sal00000140P3AAI'];
        system.debug('emailmsglist-'+emailmsglist);
        */
        
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
        public Lead RelatedEntity;
    }

    public class Response {
         @InvocableVariable
        public String Prompt;
    }
}