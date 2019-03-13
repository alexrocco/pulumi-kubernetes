// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * StorageClassList is a collection of storage classes.
     */
    export class StorageClassList extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"storage.k8s.io/v1beta1">;

      /**
       * Items is the list of StorageClasses
       */
      public readonly items: pulumi.Output<outputApi.storage.v1beta1.StorageClass[]>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"StorageClassList">;

      /**
       * Standard list metadata More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ListMeta>;

      /**
       * Get the state of an existing `StorageClassList` resource, as identified by `id`.
       * Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
       * Kubernetes convention) the ID becomes default/<name>.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form
       *  <namespace>/<name> or <name>.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageClassList {
          return new StorageClassList(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.storage.v1beta1.StorageClassList { return this.__inputs; }
      private readonly __inputs: inputApi.storage.v1beta1.StorageClassList;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.storage.v1beta1.StorageClassList> {
        return ctx.list({...args, type: "kubernetes:storage.k8s.io/v1beta1:StorageClassList",});
      }

      public static addAdmissionPolicy(policy: pulumi.policy.AdmissionPolicy): void {
        pulumi.runtime.addAdmissionPolicy({
          ...policy,
          pulumiType: "kubernetes:storage.k8s.io/v1beta1:StorageClassList",
        });
      }

      /**
       * Create a storage.v1beta1.StorageClassList resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.storage.v1beta1.StorageClassList, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "storage.k8s.io/v1beta1";
          inputs["items"] = args && args.items || undefined;
          inputs["kind"] = "StorageClassList";
          inputs["metadata"] = args && args.metadata || undefined;
          super("kubernetes:storage.k8s.io/v1beta1:StorageClassList", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
