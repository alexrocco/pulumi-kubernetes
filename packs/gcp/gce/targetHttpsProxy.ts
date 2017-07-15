// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class TargetHttpsProxy extends lumi.NamedResource implements TargetHttpsProxyArgs {
    public readonly description?: string;
    public readonly id?: string;
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly sslCertificates: string[];
    public readonly urlMap: string;

    constructor(name: string, args: TargetHttpsProxyArgs) {
        super(name);
        this.description = args.description;
        if (args.id === undefined) {
            throw new Error("Property argument 'id' is required, but was missing");
        }
        this.id = args.id;
        this.project = args.project;
        if (args.selfLink === undefined) {
            throw new Error("Property argument 'selfLink' is required, but was missing");
        }
        this.selfLink = args.selfLink;
        if (args.sslCertificates === undefined) {
            throw new Error("Property argument 'sslCertificates' is required, but was missing");
        }
        this.sslCertificates = args.sslCertificates;
        if (args.urlMap === undefined) {
            throw new Error("Property argument 'urlMap' is required, but was missing");
        }
        this.urlMap = args.urlMap;
    }
}

export interface TargetHttpsProxyArgs {
    readonly description?: string;
    readonly id?: string;
    readonly project?: string;
    readonly selfLink?: string;
    readonly sslCertificates: string[];
    readonly urlMap: string;
}
