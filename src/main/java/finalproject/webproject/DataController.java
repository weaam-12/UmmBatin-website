package finalproject.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class DataController {

    private final RequestService requestService;
    private final RequestHistoryService requestHistoryService;

    @Autowired
    public DataController(RequestService requestService, RequestHistoryService requestHistoryService) {
        this.requestService = requestService;
        this.requestHistoryService = requestHistoryService;
    }

    @GetMapping("/payment")
    public ResponseEntity<Map<String, String>> getPaymentData() {
        Map<String, String> response = new HashMap<>();
        response.put("service", "Payment");
        response.put("status", "active");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/requests")
    public ResponseEntity<String> handleRequest(@RequestBody Request request) {
        requestService.saveRequest(request);
        return ResponseEntity.ok("Request received");
    }

    @GetMapping("/requests")
    public ResponseEntity<List<Request>> getAllRequests() {
        return ResponseEntity.ok(requestService.getAllRequests());
    }

    @GetMapping("/requests-history")
    public ResponseEntity<List<RequestHistory>> getRequestHistory() {
        return ResponseEntity.ok(requestHistoryService.getAllRequestHistory());
    }

    @GetMapping("/additional-tools")
    public ResponseEntity<Map<String, String>> getAdditionalToolsData() {
        Map<String, String> response = new HashMap<>();
        response.put("service", "Additional Tools");
        response.put("status", "active");
        return ResponseEntity.ok(response);
    }
}
