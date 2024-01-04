import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";

  return (
    <button className="btn btn-primary btn-block" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">SENDING...</span>
        </>
      ) : (
        text || "SUBMIT"
      )}
    </button>
  );
};

export default SubmitButton;
