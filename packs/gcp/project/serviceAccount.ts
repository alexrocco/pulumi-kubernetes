// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ServiceAccount extends lumi.NamedResource implements ServiceAccountArgs {
    public readonly accountId: string;
    public readonly displayName?: string;
    public readonly email?: string;
    public readonly policyData?: string;
    public readonly project?: string;
    public readonly uniqueId?: string;

    constructor(name: string, args: ServiceAccountArgs) {
        super(name);
        if (args.accountId === undefined) {
            throw new Error("Property argument 'accountId' is required, but was missing");
        }
        this.accountId = args.accountId;
        this.displayName = args.displayName;
        if (args.email === undefined) {
            throw new Error("Property argument 'email' is required, but was missing");
        }
        this.email = args.email;
        this.policyData = args.policyData;
        this.project = args.project;
        if (args.uniqueId === undefined) {
            throw new Error("Property argument 'uniqueId' is required, but was missing");
        }
        this.uniqueId = args.uniqueId;
    }
}

export interface ServiceAccountArgs {
    readonly accountId: string;
    readonly displayName?: string;
    readonly email?: string;
    readonly policyData?: string;
    readonly project?: string;
    readonly uniqueId?: string;
}
