// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class UsagePlanKey extends lumi.NamedResource implements UsagePlanKeyArgs {
    public readonly keyId: string;
    public readonly keyType: string;
    public readonly usagePlanId: string;
    public readonly value?: string;

    constructor(name: string, args: UsagePlanKeyArgs) {
        super(name);
        if (args.keyId === undefined) {
            throw new Error("Property argument 'keyId' is required, but was missing");
        }
        this.keyId = args.keyId;
        if (args.keyType === undefined) {
            throw new Error("Property argument 'keyType' is required, but was missing");
        }
        this.keyType = args.keyType;
        if (args.usagePlanId === undefined) {
            throw new Error("Property argument 'usagePlanId' is required, but was missing");
        }
        this.usagePlanId = args.usagePlanId;
        if (args.value === undefined) {
            throw new Error("Property argument 'value' is required, but was missing");
        }
        this.value = args.value;
    }
}

export interface UsagePlanKeyArgs {
    readonly keyId: string;
    readonly keyType: string;
    readonly usagePlanId: string;
    readonly value?: string;
}
