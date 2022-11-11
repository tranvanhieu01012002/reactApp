import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Back from './Back';
import Banner from './Banner';
import TopProduct from './TopProduct';
import styles from './style';
import AllProduct from './AllProduct';
import { NavigateProvider } from './NavigateContext';
import { getProducts } from '../services/api';


const CategoryListing = ({navigation}) => {

    const [products,setProducts] = useState({
        isLoaded:false,
        data:[]
    })

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            setProducts({
                isLoaded:true,
                data:res.data
            })
        })
        .catch((err)=>console.log(err))
    },[])
    return (
       <NavigateProvider navigation={navigation}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} 
                horizontal={false} 
                style={styles.container}
            >
               <View>
                    <Banner/>
                    <TopProduct navigation={navigation}/>
                    {
                        products.isLoaded 
                        ? 
                        <AllProduct 
                            products={products.data}  
                            navigation={navigation}
                        />
                        :
                        <Text>Loading ...</Text>
                    }
               </View>
            </ScrollView>
       </NavigateProvider>
    )
}

export default CategoryListing;