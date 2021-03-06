// Auto-generated
let project = new Project('PIENFIRE_0_0_4');

project.addSources('Sources');
project.addLibrary("/Users/morisoichiro/Desktop/ArmorySDK/armory");
project.addLibrary("/Users/morisoichiro/Desktop/ArmorySDK/iron");
project.addLibrary("/Users/morisoichiro/Desktop/ArmorySDK/lib/haxebullet");
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/lib/haxebullet/ammo/ammo.js", { notinlist: true });
project.addParameter('-dce full');
project.addParameter('armory.trait.internal.UniformsManager');
project.addParameter("--macro keep('armory.trait.internal.UniformsManager')");
project.addParameter('armory.trait.physics.bullet.RigidBody');
project.addParameter("--macro keep('armory.trait.physics.bullet.RigidBody')");
project.addParameter('arm.node.Fire');
project.addParameter("--macro keep('arm.node.Fire')");
project.addParameter('armory.trait.internal.CanvasScript');
project.addParameter("--macro keep('armory.trait.internal.CanvasScript')");
project.addParameter('armory.trait.physics.bullet.PhysicsWorld');
project.addParameter("--macro keep('armory.trait.physics.bullet.PhysicsWorld')");
project.addShaders("build_PIENFIRE/compiled/Shaders/*.glsl", { noembed: false});
project.addAssets("build_PIENFIRE/compiled/Assets/**", { notinlist: true });
project.addAssets("build_PIENFIRE/compiled/Shaders/*.arm", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_0.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_1.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_2.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_3.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_4.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_5.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_6.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/hosek/hosek_radiance_7.hdr", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/smaa_area.png", { notinlist: true });
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/smaa_search.png", { notinlist: true });
project.addAssets("Bundled/canvas/PIENFIREUI.files", { notinlist: true });
project.addAssets("Bundled/canvas/PIENFIREUI.json", { notinlist: true });
project.addAssets("Bundled/canvas/_themes.json", { notinlist: true });
project.addAssets("texture/Land.png", { notinlist: true });
project.addAssets("texture/ResizePIENF.png", { notinlist: true });
project.addLibrary("/Users/morisoichiro/Desktop/ArmorySDK/lib/zui");
project.addAssets("/Users/morisoichiro/Desktop/ArmorySDK/armory/Assets/font_default.ttf", { notinlist: false });
project.addDefine('arm_hosek');
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_cascade=1024');
project.addDefine('rp_shadowmap_cube=512');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=SMAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('rp_translucency');
project.addDefine('arm_physics');
project.addDefine('arm_bullet');
project.addDefine('arm_published');
project.addDefine('arm_compress');
project.addDefine('arm_soundcompress');
project.addDefine('arm_audio');
project.addDefine('arm_ui');
project.addDefine('arm_skin');
project.addDefine('arm_particles');
project.addDefine('arm_loadscreen');
project.addDefine('arm_resizable');


resolve(project);
