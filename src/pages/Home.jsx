import { Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, loading, signOut } = useAuth(); // Use signOut from context
  const navigate = useNavigate();

  if (loading || !user) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut(); // Use context signOut, NOT direct supabase
    navigate("/login");
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Welcome {user.email}!</h2>
        <Button onClick={handleLogout} className="w-100">
          Log Out
        </Button>
      </Card.Body>
    </Card>
  );
}
