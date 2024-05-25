const fetchBalance = async () => {
    try {
      const response = await fetch('/members');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.balance;
    } catch (error) {
      console.error('There was an error fetching the balance!', error);
      throw error;
    }
  };

export default fetchBalance