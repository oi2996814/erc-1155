import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { OwnableMock, OwnableMockInterface } from "../../mocks/OwnableMock";
declare type OwnableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnableMock__factory extends ContractFactory {
    constructor(...args: OwnableMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OwnableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OwnableMock;
    connect(signer: Signer): OwnableMock__factory;
    static readonly bytecode = "0x60806040526000600155600060025534801561001a57600080fd5b50600080547fffffffffffffffffffffffff000000000000000000000000000000000000000016331780825560405173ffffffffffffffffffffffffffffffffffffffff9190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610357806100986000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063776e8c30146100515780638da5cb5b1461005b578063aae7aa4b1461008c578063f2fde38b14610094575b600080fd5b6100596100c7565b005b6100636100d2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596100ee565b610059600480360360208110156100aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610168565b600280546001019055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461015e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102fc6026913960400191505060405180910390fd5b6001805481019055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102fc6026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806102d2602a913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c49445f414444524553534f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f545f4f574e4552a2646970667358221220a503cba5a88f56b4a74ed008ab459499f765a9276ec5969eaf8844cf45b34a7f64736f6c63430007040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OwnableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableMock;
}
export {};
