import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const S3_BUCKET_URL = 'https://my-reviews-bucket.s3.us-west-2.amazonaws.com/reviews.json'; // Replace with your S3 bucket URL
const API_URL = 'https://kylfj8owfl.execute-api.us-west-2.amazonaws.com/add-reviews';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });

  // Fetch reviews from the S3 bucket
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(S3_BUCKET_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify(newReview),
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to submit review: ${errorMessage}`);
        }
  
        const result = await response.json();
        console.log(result.message);
  
        // Update the local reviews list for immediate feedback
        setReviews([...reviews, newReview]);
        setNewReview({ name: '', comment: '', rating: 0 });
      } catch (error) {
        console.error('Error submitting review:', error);
        alert('Failed to submit review. Check the console for details.');
      }
    } else {
      alert('Please fill in all fields and provide a rating.');
    }
  };
  
  return (
    <div style={{ marginTop: '30px' }} id="testimonials">
      <h1 style={{ color: '#386BC0' }}>Reviews</h1>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.name}</h3>
            <p>{'⭐'.repeat(review.rating)} ({review.rating}/5)</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h3 style={{ color: '#386BC0', textShadow: "2px 1px 2px grey, 0 0 1em white, 0 0 0.2em white" }}>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
          />
          <textarea
            name="comment"
            placeholder="Your Review"
            value={newReview.comment}
            onChange={handleInputChange}
          ></textarea>
          <select name="rating" value={newReview.rating} onChange={handleInputChange}>
            <option value="0">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <MDBBtn type="submit" color="primary" block className='my-4'>Submit Review</MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
