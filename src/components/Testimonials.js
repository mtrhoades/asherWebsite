import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState(() => {
    // Retrieve reviews from localStorage or use default reviews
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      { name: 'John Doe', comment: 'Excellent service and quality installation!', rating: 5 },
      { name: 'Jane Smith', comment: 'Professional and timely. Highly recommend!', rating: 4 },
      { name: 'Mike Johnson', comment: 'Affordable and reliable service.', rating: 5 },
    ];
  });

  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', comment: '', rating: 0 });
    } else {
      alert('Please fill in all fields and provide a rating.');
    }
  };

  return (
    <div style={{marginTop: '30px'}} id="testimonials">
      <h1 style={{color: '#386BC0'}}>Reviews</h1>

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
        <h3>Leave a Review</h3>
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
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
