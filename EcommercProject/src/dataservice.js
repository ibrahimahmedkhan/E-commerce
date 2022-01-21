import http from "./http-common";

class TutorialDataService {
    getAll() {
      return http.get("/tutorials");
    }
    
    get(){
        return http.get("/");
    }

    send(data){
        return http.post("/", data);
    }

    insert(data){
        return http.post("/insert", data);
    }

    update(data){
        return http.post("/update", data);
    }

    delete(data){
        return http.post("/delete", data);
    }

    read(data){
        return http.post("/read", data);
    }

    readAll(data){
        return http.post("/readAll", data);
    }

    insertAdmin(data){
        return http.post("/insertAdmin", data);
    }

    updateAdmin(data){
        return http.post("/updateAdmin", data);
    }

    deleteAdmin(data){
        return http.post("/deleteAdmin", data);
    }

    readAdmin(data){
        return http.post("/readAdmin", data);
    }

    readAllAdmin(data){
        return http.post("/readAllAdmin", data);
    }

    current_user(data){
        return http.post("/current_user", data);
    }

    signUp(data){
        return http.post("/signUp", data);
    }

    logOut(data){
        return http.post("/logOut", data);
    }

    login(data){
        return http.post("/login", data);
    }

    getCart(data){
        return http.post("/getCart", data);
    }

    getTotal(data){
        return http.post("/getTotal", data);
    }

    addToCart(data){
        return http.post("/addToCart", data);
    }

    confirmOrder(data){
        return http.post("/confirmOrder", data);
    }

    getProducts(data){
        return http.post("/getProducts", data);
    }

    getProductsByCategory(data){
        return http.post("/getProductsByCategory", data);
    }

    getProductsByName(data){
        return http.post("/getProductsByName", data);
    } 

    insertProducts(data){
        return http.post("/insertProducts", data);
    }
    
    getProductFromCart(data){
        return http.post("/getProductFromCart", data);
    }

    deleteItem(data){
        return http.post("/deleteItem", data);
    }

    alterQuantityFromDB(data){
        return http.post("/alterQuantityFromDB", data);
    }
    

    
}

export default new TutorialDataService();