// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Core.V1
{

    /// <summary>
    /// VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
    /// </summary>
    [OutputType]
    public sealed class VolumeNodeAffinity
    {
        /// <summary>
        /// Required specifies hard node constraints that must be met.
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Core.V1.NodeSelector Required;

        [OutputConstructor]
        private VolumeNodeAffinity(Pulumi.Kubernetes.Types.Outputs.Core.V1.NodeSelector required)
        {
            Required = required;
        }
    }
}
