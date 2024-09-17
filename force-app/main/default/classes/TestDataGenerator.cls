public class TestDataGenerator {

    // Method to generate test data for Salesforce Cases
    public static void generateTestCases(Integer numberOfCases) {
        // Define pools of possible values for each field
        List<String> subjects = new List<String>{'Subject1', 'Subject2', 'Subject3'};
        List<String> descriptions = new List<String>{'Description1', 'Description2', 'Description3'};
        List<String> statuses = new List<String>{'New', 'In Progress', 'Closed'};
        List<String> priorities = new List<String>{'High', 'Medium', 'Low'};
        List<String> origins = new List<String>{'Phone', 'Email', 'Web'};
        
        // List to hold generated cases
        List<Case> newCases = new List<Case>();
        
        // Generate data for specified number of cases
        for (Integer i = 0; i < numberOfCases; i++) {
            // Randomly select values from each field's pool
            String subject = subjects[Math.mod(Math.abs(Crypto.getRandomInteger()), subjects.size())];
            String description = descriptions[Math.mod(Math.abs(Crypto.getRandomInteger()), descriptions.size())];
            String status = statuses[Math.mod(Math.abs(Crypto.getRandomInteger()), statuses.size())];
            String priority = priorities[Math.mod(Math.abs(Crypto.getRandomInteger()), priorities.size())];
            String origin = origins[Math.mod(Math.abs(Crypto.getRandomInteger()), origins.size())];
            
            // Create new Case record
            Case newCase = new Case(
                Subject = subject,
                Description = description,
                Status = status,
                Priority = priority,
                Origin = origin
            );
            
            // Add new case to list
            newCases.add(newCase);
        }
        
        // Insert all generated cases
        insert newCases;
    }
}