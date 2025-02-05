package finalproject.webproject;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class RequestHistoryService {
    private final List<RequestHistory> requestHistoryList = new ArrayList<>();

    public List<RequestHistory> getAllRequestHistory() {
        return new ArrayList<>(requestHistoryList);
    }

    public void addRequestHistory(RequestHistory requestHistory) {
        requestHistoryList.add(requestHistory);
    }
}
