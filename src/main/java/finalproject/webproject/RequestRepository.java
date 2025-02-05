package finalproject.webproject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {
    // You can define custom queries here if needed
}
