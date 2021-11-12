import { Car } from "./car";
import { responseModel } from "./responseModel";

export interface carResponseModel extends responseModel {
    data:Car[],
    
}