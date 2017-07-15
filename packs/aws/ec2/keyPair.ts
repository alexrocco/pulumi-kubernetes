// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class KeyPair extends lumi.NamedResource implements KeyPairArgs {
    public readonly fingerprint?: string;
    public readonly keyName?: string;
    public readonly keyNamePrefix?: string;
    public readonly publicKey: string;

    constructor(name: string, args: KeyPairArgs) {
        super(name);
        if (args.fingerprint === undefined) {
            throw new Error("Property argument 'fingerprint' is required, but was missing");
        }
        this.fingerprint = args.fingerprint;
        this.keyName = args.keyName;
        this.keyNamePrefix = args.keyNamePrefix;
        if (args.publicKey === undefined) {
            throw new Error("Property argument 'publicKey' is required, but was missing");
        }
        this.publicKey = args.publicKey;
    }
}

export interface KeyPairArgs {
    readonly fingerprint?: string;
    readonly keyName?: string;
    readonly keyNamePrefix?: string;
    readonly publicKey: string;
}
