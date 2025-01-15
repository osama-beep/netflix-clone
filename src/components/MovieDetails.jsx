import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ comment: "", rate: 1 });
  const { movieId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${movieId}&apikey=6e36dee6`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZWFlNWQyMjA3MTAwMTVkZTJmMzAiLCJpYXQiOjE3MzY5NDc5MjEsImV4cCI6MTczODE1NzUyMX0.SoMv52jCqK5FqsNtZpZFYbS8TIu-8Nan4M_9KbczVT8",
            },
          }
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchMovieDetails();
    fetchComments();
  }, [movieId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZWFlNWQyMjA3MTAwMTVkZTJmMzAiLCJpYXQiOjE3MzY5NDc5MjEsImV4cCI6MTczODE1NzUyMX0.SoMv52jCqK5FqsNtZpZFYbS8TIu-8Nan4M_9KbczVT8",
          },
          body: JSON.stringify({
            ...newComment,
            elementId: movieId,
          }),
        }
      );
      if (response.ok) {
        const addedComment = await response.json();
        setComments([...comments, addedComment]);
        setNewComment({ comment: "", rate: 1 });
        setModalMessage("Comment added successfully!");
        setShowModal(true);
      } else {
        setModalMessage("Failed to add comment. Please try again.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      setModalMessage("An error occurred. Please try again.");
      setShowModal(true);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white container mt-5">
      <h1>{movieDetails.Title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <p>{movieDetails.Plot}</p>
          <p>
            <strong>Year:</strong> {movieDetails.Year}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieDetails.Actors}
          </p>
        </div>
      </div>

      <h2 className="mt-5">Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="card bg-dark text-white mb-3">
          <div className="card-body">
            <p className="card-text">{comment.comment}</p>
            <p className="card-text">
              <small>Rate: {comment.rate}</small>
            </p>
          </div>
        </div>
      ))}

      <h3 className="mt-4">Add a Comment</h3>
      <form onSubmit={handleCommentSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Your Comment
          </label>
          <textarea
            className="form-control"
            id="comment"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">
            Rate
          </label>
          <select
            className="form-select"
            id="rate"
            value={newComment.rate}
            onChange={(e) =>
              setNewComment({ ...newComment, rate: parseInt(e.target.value) })
            }
            required
          >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Comment
        </button>
      </form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieDetails;
