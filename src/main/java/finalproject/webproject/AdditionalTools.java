package finalproject.webproject;

public class AdditionalTools {
    private String type;
    private String details;

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    @Override
    public String toString() {
        return "AdditionalTools{" + "type='" + type + '\'' + ", details='" + details + '\'' + '}';
    }
}
