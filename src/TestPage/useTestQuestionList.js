import axios from "axios";
import { useState, useEffect } from "react";

const useTestQuestionList = () => {
  const [testQuestions, setTestQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataTestQuestion = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=15");
      setTestQuestions(response?.data?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataTestQuestion();
  }, []);

  return {
    testQuestions,
    setTestQuestions,
    loading,
  };
};
export default useTestQuestionList;
