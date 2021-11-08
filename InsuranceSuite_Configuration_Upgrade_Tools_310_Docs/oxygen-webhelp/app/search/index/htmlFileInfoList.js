define(function () {
return ["Other/front-notice-proprietary.html@@@Legal notice@@@\u00A9 2020 Guidewire Software, Inc. For information about Guidewire trademarks, visit http://guidewire.com/legal-notices . Guidewire Proprietary & Confidential \u2014 DO NOT DISTRIBUTE...","topics/c_10.0.0-upgrade-steps.html@@@10.0.0 upgrade steps@@@These steps have targetVersion set to 10.0.0 and run when you upgrade from releases: 8.0 9.0 The structure of workflow files changed to accommodate localization content for all languages within the...","topics/c_10.0.2-upgrade-steps.html@@@10.0.2 upgrade steps@@@These steps have targetVersion set to 10.0.2 and run when you upgrade from releases: 8.0 9.0 10.0.x This step removes the ThrowOnGosuCoercionFailuresForLongFloatDouble configuration parameter from the...","topics/c_9.0.0-upgrade-steps.html@@@9.0.0 upgrade steps@@@These steps have targetVersion set to 9.0.0 and run when you upgrade from release 8.0. This step performs a series of actions related to properties of the phone type in the following order: Note...","topics/c_9.0.1-upgrade-steps.html@@@9.0.1 upgrade steps@@@These steps have targetVersion set to 9.0.1 and run when you upgrade from releases: 8.0 9.0.0 This step removes the indexstatistics element from database-config.xml . This change affects the following...","topics/c_error-log-files.html@@@Error log files@@@If an error occurs when running preupgrade, upgrade, Smart Merge, Smart Diff or Merge Tracker from a command line, the error is shown in the console and saved into a log file named &lt;toolName&gt...","topics/c_extend-upgrade-tools.html@@@Extending the InsuranceSuite Configuration Upgrade Tools@@@The InsuranceSuite Configuration Upgrade Tools include an upgrade automation framework, which allows you to extend their functionality by adding custom steps. The main advantage of the framework is...","topics/c_general-upgrade-steps.html@@@General upgrade steps@@@These steps do not have targetVersion set and run when you upgrade from any release. This step copies the DeprecatedAndRestoredByUpgrade.gs annotation class to gsrc/gw/api/upgrade/enhancements in the...","topics/c_handling-changes-during-upgrade.html@@@Handling changes to the configuration during an upgrade@@@This topic describes how to handle changes to the customized configuration during the configuration upgrade process. Process overview You run upgrade steps. A temporary directory is created. You...","topics/c_how-upgrade-tools-work.html@@@How the InsuranceSuite Configuration Upgrade Tools work@@@Environments and configurations involved in the configuration upgrade process When you upgrade the configuration, you work with two environments: Source environment The installation directory of your...","topics/c_listing-available-upgrade-steps.html@@@Listing available upgrade steps@@@You can display details of all available upgrade steps with the following command. upgrade --list-steps The following information is shown for each step: Step name The name generated from the name of...","topics/c_merge-resolve-different-change-types.html@@@Merging and resolving different types of changes@@@When merging and resolving files you can handle changes in different ways depending on their type. Here are the steps that you can perform in Merge Tracker. Procedures that involve the Merge and...","topics/c_merge-tracker-configuration.html@@@Configuring Merge Tracker@@@You can change Merge Tracker settings in File &gt; Settings &gt; Other Settings &gt; Guidewire Merge Tracker . Patterns Hidden files and directories , Unmergeable files and directories Patterns for files and...","topics/c_merge-tracker-tool.html@@@Merge Tracker tool@@@The Merge Tracker tool is a Guidewire Studio plugin that tracks progress and assists you in completing the manual part of the configuration upgrade process. Merge Tracker gives you a central location...","topics/c_merging-resolving-files.html@@@Merging and resolving files@@@You can merge and resolve changes automatically or manually in Merge Tracker. Note: The automatic merge and resolve process skips: Resolved files. To include a resolved file in the process, unresolve...","topics/c_overview-upgrade-tools.html@@@Overview of the InsuranceSuite Configuration Upgrade Tools@@@The InsuranceSuite Configuration Upgrade Tools are a set of utilities that help you with configuration upgrade. How to get the InsuranceSuite Configuration Upgrade Tools In InsuranceSuite release 9...","topics/c_preupgrade.html@@@Preupgrade tool@@@The preupgrade tool prepares a 7.x or 8.x configuration for the automated upgrade process by performing a number of code cleanup and formatting steps. Changes made by the preupgrade tool are...","topics/c_release-notes.html@@@Release notes@@@This topic describes changes in InsuranceSuite Configuration Upgrade Tools 3.1.0 . Guidewire attempts to provide information for issues of primary importance to our customers. This list is not...","topics/c_smart-merge-configuration.html@@@Configuring Smart Merge and Smart Diff@@@For information on available Smart Merge settings, see Configuring Merge Tracker...","topics/c_smart-merge-smart-diff-tools.html@@@Smart Merge and Smart Diff tools@@@The Smart Merge tool is a three-way merge tool that understands the semantics of Guidewire configuration files, and uses that understanding to assist you in the merge process. The Smart Diff tool is a...","topics/c_smart-merge-supported-file-types.html@@@Smart Merge supported file types@@@The Smart Merge tool supports the following file types: Typelist definition files ( .tti , .tix , .ttx ) Data entity metadata files ( .eti , .eix , .etx ) PCF files ( .pcf ) Plugin descriptor files (...","topics/c_upgrade-inspections-tool.html@@@Upgrade inspections tool@@@Upgrade inspections are a set of Guidewire Studio inspections that identify issues after you complete merging and resolving changes. The inspections search the new customized configuration in the...","topics/c_upgrade-steps.html@@@Upgrade steps reference@@@In InsuranceSuite release 9 and later, the tools are not included in InsuranceSuite applications. You can get the latest release of the InsuranceSuite Configuration Upgrade Tools and documentation...","topics/c_upgrade-tool-modes.html@@@Upgrade tool modes@@@You can run the upgrade tool in several modes. By default, the upgrade tool runs in the create mode. To choose a different mode, use the --mode parameter. upgrade --mode &lt;mode name&gt; For more...","topics/c_upgrade.html@@@Upgrade tool@@@The upgrade tool prepares your configuration for the manual merge process by performing a number of automated steps. Changes made by the upgrade tool are safe because it copies your original...","topics/c_use-merge-tracker-filters.html@@@Merge Tracker filters@@@The Merge Tracker filter pane allows you to control which files and directories are shown in Merge Tracker. During your upgrade project you may decide to organize your work into various categories or...","topics/r_available-merge-tracker-filters.html@@@Available Merge Tracker filters@@@The Merge Tracker filter pane offers the following filter groups. Resolved status These filters allow you to quickly see which files have already been resolved. The purpose of the resolved status is...","topics/r_contents-exported-file.html@@@Contents of an exported file@@@If you exported details from Merge Tracker, the file contains information about the configuration files that you selected for export. If you exported details from the command prompt, the file contains...","topics/r_merge-progress-tracking.html@@@Merge progress tracking@@@Merge Tracker tracks merge progress by creating a separate .status file in the modules/configuration/merge-statuses directory for each configuration file. The structure under the merge-statuses...","topics/r_merge-tracker-commands.html@@@Merge Tracker command line options@@@To start the Merge Tracker tool from the command line, run merge-tracker from the upgrade/bin directory. The following table lists Merge Tracker options. Option Action --merge-actions &lt;ACTIONS&gt; List...","topics/r_merge-tracker-toolbar.html@@@Merge Tracker toolbar@@@The Merge Tracker toolbar contains the following controls. Note: The toolbar controls are also available from the context menu. Show filter settings Opens the Merge Tracker filter pane that allows you...","topics/r_preupgrade-commands.html@@@Preupgrade command line options@@@To start the preupgrade tool from the command line, run preupgrade from the upgrade/bin directory. The following tables list preupgrade options. Basic options To list the basic options, run preupgrade...","topics/r_preupgrade-steps.html@@@Preupgrade steps reference@@@This topic lists steps that are run by preupgrade. BuiltinTypes Replaces certain aliases for types with their real names. For example, Number becomes java.lang.Double . CaseSensitivity Corrects the...","topics/r_smart-diff-commands.html@@@Smart Diff command line options@@@To start the Smart Diff tool from the command line, run smartdiff from the upgrade/bin directory. The smartdiff command line tool has two required arguments, left and right , corresponding to the two...","topics/r_smart-merge-commands.html@@@Smart Merge command line options@@@To start the Smart Merge tool from the command line, run smartmerge from the upgrade/bin directory. The smartmerge command line tool has three required arguments, base , left and right , corresponding...","topics/r_smart-merge-toolbar.html@@@Smart Merge toolbar@@@Controls Previous Difference Next Difference Undo Redo Previous Conflict Next Conflict Move Element Up Move Element Down Add Comment Delete Comment Out Mark as Resolved Synchronize Scrolling - When...","topics/r_upgrade-commands.html@@@Upgrade command line options@@@To start the upgrade tool from the command line, run upgrade from the upgrade/bin directory. The following table lists upgrade options. Option Action &lt;PATH&gt; Path to the configuration that you want to...","topics/r_upgrade-inspections-commands.html@@@Command line options for inspections@@@To start code and upgrade inspections from the command prompt, run upgrade-inspections in the upgrade/bin directory. The following table lists options for inspections. Option Action -X Print help...","topics/r_upgrade-inspections-reference.html@@@Upgrade inspections reference@@@Add missing reified keyword Inspection ID: AddMissingReifiedKeyword Gosu requires the reified keyword as a modifier on generic functions that are equivalent to parameterized Java functions that have...","topics/r_upgrade-steps-properties.html@@@Upgrade steps properties@@@This topic describes properties that you can use when you add a new upgrade step and override a default step. Name Description Value Required/optional class The Java class that defines the template...","topics/t_add-override-upgrade-step.html@@@Add or override an upgrade step@@@About this task You can extend the functionality of the InsuranceSuite Configuration Upgrade Tools in two ways: Add your own upgrade step Override a default upgrade step delivered by Guidewire Each...","topics/t_download-install-upgrade-tools.html@@@Download and install the InsuranceSuite Configuration Upgrade Tools@@@Before you begin The InsuranceSuite Configuration Upgrade Tools 3.1.0 require: Java Development Kit 11 An InsuranceSuite application with Guidewire Studio 5.x.x. About this task The InsuranceSuite...","topics/t_export-file-details.html@@@Export file details@@@You can export details of a configuration file or multiple configuration files to a CSV file from Merge Tracker or the command prompt...","topics/t_launch-merge-tracker.html@@@Launch Merge Tracker in Guidewire Studio@@@Procedure Run the following command in the top-level directory of the InsuranceSuite application where the InsuranceSuite Configuration Upgrade Tools are installed. gwb.bat studio Open Merge Tracker...","topics/t_manage-custom-filters.html@@@Manage custom filters@@@About this task You can define custom filters for Merge Tracker. Each filter has its own YAML file with configuration properties. Configuration files for custom filters are stored in...","topics/t_move-element-smart-merge.html@@@Move an element in an XML file@@@About this task When you merge an XML file in Smart Merge, you can move an entire element to a different position. Procedure In the pane showing the merge result, right-click the element you want to...","topics/t_partial-upgrade.html@@@Upgrade part of the configuration@@@About this task You can use the InsuranceSuite Configuration Upgrade Tools to upgrade specific configuration components. All components that are not part of the base configuration, such as...","topics/t_run-preupgrade-steps.html@@@Run preupgrade steps@@@Before you begin Verify the configuration of the InsuranceSuite application to be upgraded: Ensure that your customized configuration has no compilation errors. Such errors can lead to errors in...","topics/t_run-upgrade-steps.html@@@Run upgrade steps@@@About this task The upgrade tool first copies the modules from the customized configuration to a tmp/cfg-upgrade/modules directory in the target environment. The location of the customized...","topics/t_test-upgrade-step.html@@@Test an upgrade step@@@Before you begin Back up the files that you will use for testing. About this task After you add an upgrade step or override a default step, you can test if your new configuration works as expected...","topics/t_use-upgrade-inspections.html@@@Use upgrade inspections@@@About this task Use the Run upgrade inspections option from Merge Tracker in Guidewire Studio to find issues and, optionally, apply fixes. Procedure In the Merge Tracker file tree, select the files..."];
});