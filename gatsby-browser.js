import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/global.css'


function afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
}