Each upgrade step has its own YAML file with configuration properties.
This directory stores configuration files for custom upgrade steps.

To add a new step, create a YAML file with a unique name in this directory.

To override a default upgrade step, create a YAML file in this directory with the exact same name
as the configuration file for the default step you want to override.
Configuration files for default upgrade steps delivered by Guidewire are stored in steps/guidewire.

For more information, see "Extending the InsuranceSuite Upgrade Tools" in the Upgrade Guide.
