import { createContext, useState } from "react";
import { nanoid } from "nanoid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item no 1 ",
      rating: 10,
    },
    {
      id: 2,
      text: "this item no 2",
      rating: 8,
    },
  ]);

  const [feedbackEdit, SetFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const addFeedback = (newFeedback) => {
    newFeedback.id = nanoid();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    SetFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Update Feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
