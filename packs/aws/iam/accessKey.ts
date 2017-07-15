// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class AccessKey extends lumi.NamedResource implements AccessKeyArgs {
    public readonly encryptedSecret?: string;
    public readonly keyFingerprint?: string;
    public readonly pgpKey?: string;
    public readonly secret?: string;
    public readonly sesSmtpPassword?: string;
    public readonly status?: string;
    public readonly user: string;

    constructor(name: string, args: AccessKeyArgs) {
        super(name);
        if (args.encryptedSecret === undefined) {
            throw new Error("Property argument 'encryptedSecret' is required, but was missing");
        }
        this.encryptedSecret = args.encryptedSecret;
        if (args.keyFingerprint === undefined) {
            throw new Error("Property argument 'keyFingerprint' is required, but was missing");
        }
        this.keyFingerprint = args.keyFingerprint;
        this.pgpKey = args.pgpKey;
        if (args.secret === undefined) {
            throw new Error("Property argument 'secret' is required, but was missing");
        }
        this.secret = args.secret;
        if (args.sesSmtpPassword === undefined) {
            throw new Error("Property argument 'sesSmtpPassword' is required, but was missing");
        }
        this.sesSmtpPassword = args.sesSmtpPassword;
        if (args.status === undefined) {
            throw new Error("Property argument 'status' is required, but was missing");
        }
        this.status = args.status;
        if (args.user === undefined) {
            throw new Error("Property argument 'user' is required, but was missing");
        }
        this.user = args.user;
    }
}

export interface AccessKeyArgs {
    readonly encryptedSecret?: string;
    readonly keyFingerprint?: string;
    readonly pgpKey?: string;
    readonly secret?: string;
    readonly sesSmtpPassword?: string;
    readonly status?: string;
    readonly user: string;
}
