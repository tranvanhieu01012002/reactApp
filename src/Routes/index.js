import CategoryListing from "../CategoryListing";
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from "../Profile";
import ProductDetail from "../ProductDetail";
import Map from "../Map";
const routes = [
    {
        name : 'Home',
        component: CategoryListing,
        icon: <Icon name="home" size={30}  />
    },
    {
        name:'Profile' ,
        component: Profile,
        icon:  <Icon name="eye" size={30}  />
    },
    {
        name: "Detail Product",
        component: ProductDetail,
        icon:   <Icon name="phone"  size={30} />
    },
    {
        name:'Map' ,
        component: Map,
        icon:  <Icon name="map" size={30}  />
    }
];
export default routes;