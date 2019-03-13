// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * DEPRECATED - This group version of ControllerRevision is deprecated by
     * apps/v1beta2/ControllerRevision. See the release notes for more information.
     * ControllerRevision implements an immutable snapshot of state data. Clients are responsible
     * for serializing and deserializing the objects that contain their internal state. Once a
     * ControllerRevision has been successfully created, it can not be updated. The API Server will
     * fail validation of all requests that attempt to mutate the Data field. ControllerRevisions
     * may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet
     * controllers for update and rollback, this object is beta. However, it may be subject to name
     * and representation changes in future releases, and clients should not depend on its
     * stability. It is primarily for internal use by controllers.
     */
    export class ControllerRevision extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"apps/v1beta1">;

      /**
       * Data is the serialized representation of the state.
       */
      public readonly data: pulumi.Output<outputApi.pkg.runtime.RawExtension>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"ControllerRevision">;

      /**
       * Standard object's metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ObjectMeta>;

      /**
       * Revision indicates the revision of the state represented by Data.
       */
      public readonly revision: pulumi.Output<number>;

      /**
       * Get the state of an existing `ControllerRevision` resource, as identified by `id`.
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
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ControllerRevision {
          return new ControllerRevision(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.apps.v1beta1.ControllerRevision { return this.__inputs; }
      private readonly __inputs: inputApi.apps.v1beta1.ControllerRevision;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.apps.v1beta1.ControllerRevision> {
        return ctx.list({...args, type: "kubernetes:apps/v1beta1:ControllerRevision",});
      }

      public static addAdmissionPolicy(policy: pulumi.policy.AdmissionPolicy): void {
        pulumi.runtime.addAdmissionPolicy({
          ...policy,
          pulumiType: "kubernetes:apps/v1beta1:ControllerRevision",
        });
      }

      /**
       * Create a apps.v1beta1.ControllerRevision resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.apps.v1beta1.ControllerRevision, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "apps/v1beta1";
          inputs["data"] = args && args.data || undefined;
          inputs["kind"] = "ControllerRevision";
          inputs["metadata"] = args && args.metadata || undefined;
          inputs["revision"] = args && args.revision || undefined;
          super("kubernetes:apps/v1beta1:ControllerRevision", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
