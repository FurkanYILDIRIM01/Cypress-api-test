class BaseLib{

    randomUserName(){
        var value = Math.floor(Math.random() * 100000);
        return "FRKNYLDRM"+value;
    }
}

export default BaseLib