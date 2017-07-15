// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DefaultSubnet extends lumi.NamedResource implements DefaultSubnetArgs {
    public readonly assignIpv6AddressOnCreation?: boolean;
    public readonly availabilityZone: string;
    public readonly cidrBlock?: string;
    public readonly ipv6CidrBlock?: string;
    public readonly ipv6CidrBlockAssociationId?: string;
    public readonly mapPublicIpOnLaunch?: boolean;
    public readonly tags?: {[key: string]: any};
    public readonly vpcId?: string;

    constructor(name: string, args: DefaultSubnetArgs) {
        super(name);
        if (args.assignIpv6AddressOnCreation === undefined) {
            throw new Error("Property argument 'assignIpv6AddressOnCreation' is required, but was missing");
        }
        this.assignIpv6AddressOnCreation = args.assignIpv6AddressOnCreation;
        if (args.availabilityZone === undefined) {
            throw new Error("Property argument 'availabilityZone' is required, but was missing");
        }
        this.availabilityZone = args.availabilityZone;
        if (args.cidrBlock === undefined) {
            throw new Error("Property argument 'cidrBlock' is required, but was missing");
        }
        this.cidrBlock = args.cidrBlock;
        if (args.ipv6CidrBlock === undefined) {
            throw new Error("Property argument 'ipv6CidrBlock' is required, but was missing");
        }
        this.ipv6CidrBlock = args.ipv6CidrBlock;
        if (args.ipv6CidrBlockAssociationId === undefined) {
            throw new Error("Property argument 'ipv6CidrBlockAssociationId' is required, but was missing");
        }
        this.ipv6CidrBlockAssociationId = args.ipv6CidrBlockAssociationId;
        if (args.mapPublicIpOnLaunch === undefined) {
            throw new Error("Property argument 'mapPublicIpOnLaunch' is required, but was missing");
        }
        this.mapPublicIpOnLaunch = args.mapPublicIpOnLaunch;
        this.tags = args.tags;
        if (args.vpcId === undefined) {
            throw new Error("Property argument 'vpcId' is required, but was missing");
        }
        this.vpcId = args.vpcId;
    }
}

export interface DefaultSubnetArgs {
    readonly assignIpv6AddressOnCreation?: boolean;
    readonly availabilityZone: string;
    readonly cidrBlock?: string;
    readonly ipv6CidrBlock?: string;
    readonly ipv6CidrBlockAssociationId?: string;
    readonly mapPublicIpOnLaunch?: boolean;
    readonly tags?: {[key: string]: any};
    readonly vpcId?: string;
}
