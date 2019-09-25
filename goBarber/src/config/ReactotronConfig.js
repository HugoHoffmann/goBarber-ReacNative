import Rectotron from 'reactotron-react-native';

// caso não apareça nada - executar o comando adb reverse tcp:9090 tcp:9090 para redirecionar as portas
if(__DEV__){
    const tron = Rectotron.configure().useReactNative().connect();
    console.tron = tron;

    // limpa toda a time line do Reactotron 
    tron.clear();
}