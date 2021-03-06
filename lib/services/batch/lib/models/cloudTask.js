/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CloudTask class.
 * @constructor
 * An Azure Batch task.
 * @member {string} [id] A string that uniquely identifies the task within the
 * job. The id can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters.
 * 
 * @member {string} [displayName] A display name for the task.
 * 
 * @member {string} [url] The URL of the task.
 * 
 * @member {string} [eTag] The ETag of the task.
 * 
 * @member {date} [lastModified] The last modified time of the task.
 * 
 * @member {date} [creationTime] The creation time of the task.
 * 
 * @member {string} [state] The current state of the task. Possible values
 * include: 'active', 'preparing', 'running', 'completed'
 * 
 * @member {date} [stateTransitionTime] The time at which the task entered its
 * current state.
 * 
 * @member {string} [previousState] The previous state of the task. This
 * property is not set if the task is in its initial Active state. Possible
 * values include: 'active', 'preparing', 'running', 'completed'
 * 
 * @member {date} [previousStateTransitionTime] The time at which the task
 * entered its previous state. This property is not set if the task is in its
 * initial Active state.
 * 
 * @member {string} [commandLine] The command line of the task. For
 * multi-instance tasks, the command line is executed on the primary subtask
 * after all the subtasks have finished executing the coordianation command
 * line.
 * 
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. For
 * multi-instance tasks, the resource files will only be downloaded to the
 * compute node on which the primary subtask is executed.
 * 
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the task.
 * 
 * @member {object} [affinityInfo] A locality hint that can be used by the
 * Batch service to select a compute node on which to start the new task.
 * 
 * @member {string} [affinityInfo.affinityId] An opaque string representing
 * the location of a compute node or a task that has run previously. You can
 * pass the AffinityId of a compute node or task to indicate that this task
 * needs to be placed close to the node or task.
 * 
 * @member {object} [constraints] The execution constraints that apply to this
 * task.
 * 
 * @member {moment.duration} [constraints.maxWallClockTime] The maximum
 * elapsed time that the task may run, measured from the time the task
 * starts. If the task does not complete within the time limit, the Batch
 * service terminates it.
 * 
 * @member {moment.duration} [constraints.retentionTime] The minimum time to
 * retain the working directory for the task on the compute node where it
 * ran, from the time it completes execution. After this time, the Batch
 * service may delete the working directory and all its contents. The default
 * is infinite.
 * 
 * @member {number} [constraints.maxTaskRetryCount] The maximum number of
 * times the task may be retried. The Batch service retries a task if its
 * exit code is nonzero.
 * 
 * @member {boolean} [runElevated] Whether to run the task in elevated mode.
 * 
 * @member {object} [executionInfo] Information about the execution of the
 * task.
 * 
 * @member {date} [executionInfo.startTime] The time at which the task started
 * running. If the task has been restarted or retried, this is the most
 * recent time at which the task started running.
 * 
 * @member {date} [executionInfo.endTime] The time at which the task
 * completed. This property is set only if the task is in the Completed state.
 * 
 * @member {number} [executionInfo.exitCode] The exit code of the task. This
 * property is set only if the task is in completed state.
 * 
 * @member {object} [executionInfo.schedulingError] Details of any error
 * encountered scheduling the task.
 * 
 * @member {string} [executionInfo.schedulingError.category] The category of
 * the task scheduling error. Possible values include: 'usererror',
 * 'servererror', 'unmapped'
 * 
 * @member {string} [executionInfo.schedulingError.code] An identifier for the
 * task scheduling error. Codes are invariant and are intended to be consumed
 * programmatically.
 * 
 * @member {string} [executionInfo.schedulingError.message] A message
 * describing the task scheduling error, intended to be suitable for display
 * in a user interface.
 * 
 * @member {array} [executionInfo.schedulingError.details] The list of
 * additional error details related to the scheduling error.
 * 
 * @member {number} [executionInfo.retryCount] The number of times the task
 * has been retried by the Batch service.
 * 
 * @member {date} [executionInfo.lastRetryTime] The most recent time at which
 * a retry of the task started running.
 * 
 * @member {number} [executionInfo.requeueCount] The number of times the task
 * has been requeued by the Batch service as the result of a user request.
 * 
 * @member {date} [executionInfo.lastRequeueTime] The most recent time at
 * which the task has been requeued by the Batch service as the result of a
 * user request.
 * 
 * @member {object} [nodeInfo] Information about the compute node on which the
 * task ran.
 * 
 * @member {string} [nodeInfo.affinityId] An identifier for the compute node
 * on which the task ran, which can be passed when adding a task to request
 * that the task be scheduled close to this compute node.
 * 
 * @member {string} [nodeInfo.nodeUrl] The URL of the node on which the task
 * ran.
 * 
 * @member {string} [nodeInfo.poolId] The id of the pool on which the task ran.
 * 
 * @member {string} [nodeInfo.nodeId] The id of the node on which the task ran.
 * 
 * @member {string} [nodeInfo.taskRootDirectory] The root directory of the
 * task on the compute node.
 * 
 * @member {string} [nodeInfo.taskRootDirectoryUrl] The URL to the root
 * directory of the task on the compute node.
 * 
 * @member {object} [multiInstanceSettings] Information about how to run the
 * multi-instance task.
 * 
 * @member {number} [multiInstanceSettings.numberOfInstances] The number of
 * compute nodes required by the multi-instance task.
 * 
 * @member {string} [multiInstanceSettings.coordinationCommandLine] The
 * command to run on the compute node instances for coordinating among the
 * subtasks.
 * 
 * @member {array} [multiInstanceSettings.commonResourceFiles] A list of files
 * that the Batch service will download before running the coordination
 * command line. The difference between common resource files and task
 * resource files is that common resource files are downloaded for all
 * subtasks including the primary, whereas task resource files are downloaded
 * only for the primary.
 * 
 * @member {object} [stats] Resource usage statistics for the task.
 * 
 * @member {string} [stats.url] The URL of the statistics.
 * 
 * @member {date} [stats.startTime] The start time of the time range covered
 * by the statistics.
 * 
 * @member {date} [stats.lastUpdateTime] The time at which the statistics were
 * last updated. All statistics are limited to the range between startTime
 * and lastUpdateTime.
 * 
 * @member {moment.duration} [stats.userCPUTime] The total user mode CPU time
 * (summed across all cores and all compute nodes) consumed by the task.
 * 
 * @member {moment.duration} [stats.kernelCPUTime] The total kernel mode CPU
 * time (summed across all cores and all compute nodes) consumed by the task.
 * 
 * @member {moment.duration} [stats.wallClockTime] The total wall clock time
 * of the task.
 * 
 * @member {number} [stats.readIOps] The total number of disk read operations
 * made by the task.
 * 
 * @member {number} [stats.writeIOps] The total number of disk write
 * operations made by the task.
 * 
 * @member {number} [stats.readIOGiB] The total gibibytes read from disk by
 * the task.
 * 
 * @member {number} [stats.writeIOGiB] The total gibibytes written to disk by
 * the task.
 * 
 * @member {moment.duration} [stats.waitTime] The total wait time of the task.
 * The wait time for a task is defined as the elapsed time between the
 * creation of the task and the start of task execution. (If the task is
 * retried due to failures, the wait time is the time to the most recent task
 * execution.)
 * 
 * @member {object} [dependsOn] Any dependencies this task has.
 * 
 * @member {array} [dependsOn.taskIds] The list of task ids that must complete
 * before this task can be scheduled.
 * 
 * @member {array} [dependsOn.taskIdRanges] The list of task ranges that must
 * complete before this task can be scheduled.
 * 
 */
function CloudTask() {
}

/**
 * Defines the metadata of CloudTask
 *
 * @returns {object} metadata of CloudTask
 *
 */
CloudTask.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CloudTask',
    type: {
      name: 'Composite',
      className: 'CloudTask',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        url: {
          required: false,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        eTag: {
          required: false,
          serializedName: 'eTag',
          type: {
            name: 'String'
          }
        },
        lastModified: {
          required: false,
          serializedName: 'lastModified',
          type: {
            name: 'DateTime'
          }
        },
        creationTime: {
          required: false,
          serializedName: 'creationTime',
          type: {
            name: 'DateTime'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'active', 'preparing', 'running', 'completed' ]
          }
        },
        stateTransitionTime: {
          required: false,
          serializedName: 'stateTransitionTime',
          type: {
            name: 'DateTime'
          }
        },
        previousState: {
          required: false,
          serializedName: 'previousState',
          type: {
            name: 'Enum',
            allowedValues: [ 'active', 'preparing', 'running', 'completed' ]
          }
        },
        previousStateTransitionTime: {
          required: false,
          serializedName: 'previousStateTransitionTime',
          type: {
            name: 'DateTime'
          }
        },
        commandLine: {
          required: false,
          serializedName: 'commandLine',
          type: {
            name: 'String'
          }
        },
        resourceFiles: {
          required: false,
          serializedName: 'resourceFiles',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ResourceFileElementType',
                type: {
                  name: 'Composite',
                  className: 'ResourceFile'
                }
            }
          }
        },
        environmentSettings: {
          required: false,
          serializedName: 'environmentSettings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EnvironmentSettingElementType',
                type: {
                  name: 'Composite',
                  className: 'EnvironmentSetting'
                }
            }
          }
        },
        affinityInfo: {
          required: false,
          serializedName: 'affinityInfo',
          type: {
            name: 'Composite',
            className: 'AffinityInformation'
          }
        },
        constraints: {
          required: false,
          serializedName: 'constraints',
          type: {
            name: 'Composite',
            className: 'TaskConstraints'
          }
        },
        runElevated: {
          required: false,
          serializedName: 'runElevated',
          type: {
            name: 'Boolean'
          }
        },
        executionInfo: {
          required: false,
          serializedName: 'executionInfo',
          type: {
            name: 'Composite',
            className: 'TaskExecutionInformation'
          }
        },
        nodeInfo: {
          required: false,
          serializedName: 'nodeInfo',
          type: {
            name: 'Composite',
            className: 'ComputeNodeInformation'
          }
        },
        multiInstanceSettings: {
          required: false,
          serializedName: 'multiInstanceSettings',
          type: {
            name: 'Composite',
            className: 'MultiInstanceSettings'
          }
        },
        stats: {
          required: false,
          serializedName: 'stats',
          type: {
            name: 'Composite',
            className: 'TaskStatistics'
          }
        },
        dependsOn: {
          required: false,
          serializedName: 'dependsOn',
          type: {
            name: 'Composite',
            className: 'TaskDependencies'
          }
        }
      }
    }
  };
};

module.exports = CloudTask;
