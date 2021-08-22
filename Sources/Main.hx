// Auto-generated
package ;
class Main {
    public static inline var projectName = 'PIENFIRE';
    public static inline var projectVersion = '0.0.4';
    public static inline var projectPackage = 'arm';
    public static function main() {
        iron.object.BoneAnimation.skinMaxBones = 8;
            iron.object.LightObject.cascadeCount = 4;
            iron.object.LightObject.cascadeSplitFactor = 0.800000011920929;
        armory.system.Starter.numAssets = 19;
        armory.system.Starter.drawLoading = armory.trait.internal.LoadingScreen.render;
        armory.system.Starter.main(
            'Scene.lz4',
            0,
            false,
            true,
            false,
            816,
            612,
            1,
            true,
            armory.renderpath.RenderPathCreator.get
        );
    }
}
