// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which
     * automatically manages the replica count of any resource implementing the scale subresource
     * based on the metrics specified.
     */
    export class HorizontalPodAutoscaler extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"autoscaling/v2beta2">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"HorizontalPodAutoscaler">;

      /**
       * metadata is the standard object metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ObjectMeta>;

      /**
       * spec is the specification for the behaviour of the autoscaler. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
       */
      public readonly spec: pulumi.Output<outputApi.autoscaling.v2beta2.HorizontalPodAutoscalerSpec>;

      /**
       * status is the current information about the autoscaler.
       */
      public readonly status: pulumi.Output<outputApi.autoscaling.v2beta2.HorizontalPodAutoscalerStatus>;

      /**
       * Get the state of an existing `HorizontalPodAutoscaler` resource, as identified by `id`.
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
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HorizontalPodAutoscaler {
          return new HorizontalPodAutoscaler(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.autoscaling.v2beta2.HorizontalPodAutoscaler { return this.__inputs; }
      private readonly __inputs: inputApi.autoscaling.v2beta2.HorizontalPodAutoscaler;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.autoscaling.v2beta2.HorizontalPodAutoscaler> {
        return ctx.list({...args, type: "kubernetes:autoscaling/v2beta2:HorizontalPodAutoscaler",});
      }

      public static addAdmissionPolicy(policy: pulumi.policy.AdmissionPolicy): void {
        pulumi.runtime.addAdmissionPolicy({
          ...policy,
          pulumiType: "kubernetes:autoscaling/v2beta2:HorizontalPodAutoscaler",
        });
      }

      /**
       * Create a autoscaling.v2beta2.HorizontalPodAutoscaler resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.autoscaling.v2beta2.HorizontalPodAutoscaler, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "autoscaling/v2beta2";
          inputs["kind"] = "HorizontalPodAutoscaler";
          inputs["metadata"] = args && args.metadata || undefined;
          inputs["spec"] = args && args.spec || undefined;
          inputs["status"] = args && args.status || undefined;
          super("kubernetes:autoscaling/v2beta2:HorizontalPodAutoscaler", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
