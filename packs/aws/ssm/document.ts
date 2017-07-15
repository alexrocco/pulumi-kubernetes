// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Document extends lumi.NamedResource implements DocumentArgs {
    public readonly arn?: string;
    public readonly content: string;
    public readonly createdDate?: string;
    public readonly defaultVersion?: string;
    public readonly description?: string;
    public readonly documentType: string;
    public readonly hash?: string;
    public readonly hashType?: string;
    public readonly latestVersion?: string;
    public readonly owner?: string;
    public readonly parameter?: { defaultValue?: string, description?: string, type?: string }[];
    public readonly permissions?: {[key: string]: { accountIds: string, type: string }};
    public readonly platformTypes?: string[];
    public readonly schemaVersion?: string;
    public readonly status?: string;

    constructor(name: string, args: DocumentArgs) {
        super(name);
        if (args.arn === undefined) {
            throw new Error("Property argument 'arn' is required, but was missing");
        }
        this.arn = args.arn;
        if (args.content === undefined) {
            throw new Error("Property argument 'content' is required, but was missing");
        }
        this.content = args.content;
        if (args.createdDate === undefined) {
            throw new Error("Property argument 'createdDate' is required, but was missing");
        }
        this.createdDate = args.createdDate;
        if (args.defaultVersion === undefined) {
            throw new Error("Property argument 'defaultVersion' is required, but was missing");
        }
        this.defaultVersion = args.defaultVersion;
        if (args.description === undefined) {
            throw new Error("Property argument 'description' is required, but was missing");
        }
        this.description = args.description;
        if (args.documentType === undefined) {
            throw new Error("Property argument 'documentType' is required, but was missing");
        }
        this.documentType = args.documentType;
        if (args.hash === undefined) {
            throw new Error("Property argument 'hash' is required, but was missing");
        }
        this.hash = args.hash;
        if (args.hashType === undefined) {
            throw new Error("Property argument 'hashType' is required, but was missing");
        }
        this.hashType = args.hashType;
        if (args.latestVersion === undefined) {
            throw new Error("Property argument 'latestVersion' is required, but was missing");
        }
        this.latestVersion = args.latestVersion;
        if (args.owner === undefined) {
            throw new Error("Property argument 'owner' is required, but was missing");
        }
        this.owner = args.owner;
        if (args.parameter === undefined) {
            throw new Error("Property argument 'parameter' is required, but was missing");
        }
        this.parameter = args.parameter;
        this.permissions = args.permissions;
        if (args.platformTypes === undefined) {
            throw new Error("Property argument 'platformTypes' is required, but was missing");
        }
        this.platformTypes = args.platformTypes;
        if (args.schemaVersion === undefined) {
            throw new Error("Property argument 'schemaVersion' is required, but was missing");
        }
        this.schemaVersion = args.schemaVersion;
        if (args.status === undefined) {
            throw new Error("Property argument 'status' is required, but was missing");
        }
        this.status = args.status;
    }
}

export interface DocumentArgs {
    readonly arn?: string;
    readonly content: string;
    readonly createdDate?: string;
    readonly defaultVersion?: string;
    readonly description?: string;
    readonly documentType: string;
    readonly hash?: string;
    readonly hashType?: string;
    readonly latestVersion?: string;
    readonly owner?: string;
    readonly parameter?: { defaultValue?: string, description?: string, type?: string }[];
    readonly permissions?: {[key: string]: { accountIds: string, type: string }};
    readonly platformTypes?: string[];
    readonly schemaVersion?: string;
    readonly status?: string;
}
