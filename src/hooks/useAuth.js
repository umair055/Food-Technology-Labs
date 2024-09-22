import { useSelector } from 'react-redux';

const useAuth = () => {
  const { isAuthenticated = false, isLoading = false } = useSelector(state => state.auth || {});
  return { isAuthenticated, loading: isLoading };
};

export default useAuth;
