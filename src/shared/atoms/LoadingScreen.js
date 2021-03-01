import { useAppContext } from '../../hooks/useAppContext';
import { Dimmer } from './Dimmer';

export const LoadingScreen = () => {
  const {
    state: { loading },
  } = useAppContext();

  return <>{loading && <Dimmer />}</>;
};
