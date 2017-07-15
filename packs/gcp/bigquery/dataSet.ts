// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class DataSet extends lumi.NamedResource implements DataSetArgs {
    public readonly creationTime?: number;
    public readonly datasetId: string;
    public readonly defaultTableExpirationMs?: number;
    public readonly description?: string;
    public readonly etag?: string;
    public readonly friendlyName?: string;
    public readonly labels?: {[key: string]: string};
    public readonly lastModifiedTime?: number;
    public readonly location?: string;
    public readonly project?: string;
    public readonly selfLink?: string;

    constructor(name: string, args: DataSetArgs) {
        super(name);
        if (args.creationTime === undefined) {
            throw new Error("Property argument 'creationTime' is required, but was missing");
        }
        this.creationTime = args.creationTime;
        if (args.datasetId === undefined) {
            throw new Error("Property argument 'datasetId' is required, but was missing");
        }
        this.datasetId = args.datasetId;
        this.defaultTableExpirationMs = args.defaultTableExpirationMs;
        this.description = args.description;
        if (args.etag === undefined) {
            throw new Error("Property argument 'etag' is required, but was missing");
        }
        this.etag = args.etag;
        this.friendlyName = args.friendlyName;
        this.labels = args.labels;
        if (args.lastModifiedTime === undefined) {
            throw new Error("Property argument 'lastModifiedTime' is required, but was missing");
        }
        this.lastModifiedTime = args.lastModifiedTime;
        this.location = args.location;
        this.project = args.project;
        if (args.selfLink === undefined) {
            throw new Error("Property argument 'selfLink' is required, but was missing");
        }
        this.selfLink = args.selfLink;
    }
}

export interface DataSetArgs {
    readonly creationTime?: number;
    readonly datasetId: string;
    readonly defaultTableExpirationMs?: number;
    readonly description?: string;
    readonly etag?: string;
    readonly friendlyName?: string;
    readonly labels?: {[key: string]: string};
    readonly lastModifiedTime?: number;
    readonly location?: string;
    readonly project?: string;
    readonly selfLink?: string;
}
