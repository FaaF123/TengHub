task.spawn(function()game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\167\176\229\143\183"].Visible=true;pcall(function()local a=require(game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\167\176\229\143\183"]["\229\136\183\230\150\176UI"])for b in pairs(a)do print(a.updateUi())end end)end)spawn(function()while true do local c=true;local d=game;local e=d.Workspace;local f=d.Lighting;local g=e.Terrain;g.WaterWaveSize=0;g.WaterWaveSpeed=0;g.WaterReflectance=0;g.WaterTransparency=0;f.GlobalShadows=false;f.FogEnd=9e9;f.Brightness=0;settings().Rendering.QualityLevel="Level01"for h,i in pairs(d:GetDescendants())do if i:IsA("Part")or i:IsA("Union")or i:IsA("CornerWedgePart")or i:IsA("TrussPart")then i.Material="Plastic"i.Reflectance=0 elseif i:IsA("Decal")or i:IsA("Texture")and c then i.Transparency=1 elseif i:IsA("ParticleEmitter")or i:IsA("Trail")then i.Lifetime=NumberRange.new(0)elseif i:IsA("Explosion")then i.BlastPressure=1;i.BlastRadius=1 elseif i:IsA("Fire")or i:IsA("SpotLight")or i:IsA("Smoke")or i:IsA("Sparkles")then i.Enabled=false elseif i:IsA("MeshPart")then i.Material="Plastic"i.Reflectance=0;i.TextureID=10385902758728957 end end;for h,j in pairs(f:GetChildren())do if j:IsA("BlurEffect")or j:IsA("SunRaysEffect")or j:IsA("ColorCorrectionEffect")or j:IsA("BloomEffect")or j:IsA("DepthOfFieldEffect")then j.Enabled=false end end;wait(900)end end)spawn(function()for b,i in next,game.workspace:GetDescendants()do if i.Name=="Egg"and i.ClassName=="MeshPart"then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=i.CFrame;task.wait(0.4)for b,k in next,i:GetChildren()do if k.ClassName=="ProximityPrompt"then fireproximityprompt(k)end end end end;wait(6)game.Players.LocalPlayer.Character:BreakJoints()end)local function l()for b,i in next,game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.Right:GetDescendants()do if i.Name=="\228\187\187\229\138\161\229\144\141\231\167\176"then return i.Text end end end;local function m()for b,i in next,game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.Right:GetDescendants()do if i.Name=="\232\191\155\229\186\166"then return i.Text end end end;local function n()for b,i in pairs(game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BUFF:GetDescendants())do if i.Name=="timeText"then return i.Text end end end;spawn(function()local o=Instance.new("ScreenGui")o.Name="LataiXHub"o.Parent=game.CoreGui;_G.textLabel=Instance.new("TextLabel")_G.textLabel.AnchorPoint=Vector2.new(0.5,0)_G.textLabel.Position=UDim2.new(0.5,0,0,0)_G.textLabel.Size=UDim2.new(0,650,0,150)_G.textLabel.Font=Enum.Font.Cartoon;_G.textLabel.TextSize=24;_G.textLabel.TextColor3=Color3.new(1,1,1)_G.textLabel.BackgroundColor3=Color3.new(0,0,0)_G.textLabel.BackgroundTransparency=0.2;_G.textLabel.Parent=o;while wait(1)do local p,q;if _G.Title then p=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main["\229\137\175\230\156\172\233\161\182\233\131\168UI"].UI["\230\179\162\230\172\161"]["\230\179\162\230\172\161\230\149\176\233\135\143"].Text;q=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main["\229\137\175\230\156\172\233\161\182\233\131\168UI"].UI["\230\179\162\230\172\161"]["\230\179\162\230\172\161"].Text else p=""q=""end;local Level=game.Players.LocalPlayer.leaderstats.Level.Value;local r=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main["UpLeft\230\137\139\230\156\186"]["\231\187\143\233\170\140"].Text.Text;local s=n()or"Not Have"local l=l()or"Not Have"local m=m()or"Not Have"_G.textLabel.Text="Level: "..Level.."\nXP: "..r.."   "..q.." "..p.."\nCoins: "..game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text.."| Gems: "..game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Diamond.Label.Text.."\nEXP Time: "..s.."\nQuest: "..l.." ("..m..")"end end)_G.Fr=true;spawn(function()while _G.Fr do task.wait(0.1)game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]["\231\129\176\232\137\178\230\140\137\233\146\174"]:Destroy()_G.Fr=false end end)spawn(function()local function t(u)local v={[1]=u}game:GetService("ReplicatedStorage"):WaitForChild("ServerMsg"):WaitForChild("Code"):InvokeServer(unpack(v))end;t("NEWHERO")t("PVPUPDATE")t("ENCHANTINGUPDATE")t("DISCORD")t("BOOSTGIFT")t("GEMGIFT")t("GOLDGIFT")t("FREEGIFT")t("NEWGAME")t("NEWGAME2")t("WEEKENDGIFT1")t("WEEKENDGIFT2")t("AURAUPDATE")t("LEOPARD")game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\228\187\187\229\138\161"].Visible=true;game.Players.LocalPlayer.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=true end)_G.Auto=false;_G.Title=false;local w=game:GetService("ReplicatedStorage")local x=game.Players;local y=game.Players.LocalPlayer;local z=y.Character;local A=z.HumanoidRootPart;local B={["white"]=1,["blue and below"]=2,["purple and below"]=3,["yellow and below"]=4,["radical red and below"]=5,["rainbow and below"]=6,["dark violet and below"]=7}function Level()local C=tonumber(game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text)local D=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if D==1 and D<=9 then Dun="1_1"LvDun=1;NumW=7000001;Numm=1;NumC=200 elseif D>=10 and D<=14 then Dun="1_1"LvDun=2;NumW=7000001;Numm=1;NumC=200 elseif D>=15 and D<=19 then Dun="1_1"LvDun=3;NumW=7000001;Numm=1;NumC=200 elseif D>=20 and D<=23 then Dun="1_2"LvDun=1;NumW=7000011;Numm=1;NumC=1000 elseif D>=24 and D<=27 then Dun="1_2"LvDun=2;NumW=7000011;Numm=1;NumC=1000 elseif D>=28 and D<=39 then Dun="1_2"LvDun=3;NumW=7000011;Numm=1;NumC=1000 elseif D>=40 and D<=42 then Dun="1_3"LvDun=1;NumW=7000021;Numm=1;NumC=5000 elseif D>=43 and D<=45 then Dun="1_3"LvDun=2;NumW=7000021;Numm=1;NumC=5000 elseif D>=46 and D<=48 then Dun="1_3"LvDun=3;NumW=7000021;Numm=1;NumC=5000 elseif D>=49 and D<=60 then Dun="1_3"LvDun=4;NumW=7000021;Numm=1;NumC=5000 end end;task.spawn(function()while wait(1)do local D=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if D>=60 then game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\142\187\229\136\171\231\154\132\228\184\150\231\149\140",2)end end end)local function E(F)local G=1;if string.find(F,"K")then G=1000 elseif string.find(F,"M")then G=1000000 elseif string.find(F,"B")then G=1000000000 end;local H=string.gsub(F,"[KMB]","")local I=tonumber(H)*G;return math.floor(I)end;local function J(K,L)local K=K;local L=L;local M;local N={}local function O(j)for b,P in next,y.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Frame["\229\189\147\229\137\141\232\163\133\229\164\135"]:GetChildren()do if P:FindFirstChild("PosName")and P:FindFirstChild("PosName").Text==j then return P.Frame.Icon.Image end end end;local function Q(j)for h,i in next,game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]:GetChildren()do if i:FindFirstChild("Stroke")and i.Stroke.Color==j then return tonumber(i.Name)end end end;for h,i in next,y.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Frame.Bag.ScrollPet:GetChildren()do if i.Name=="Temp"then if i:FindFirstChild("onlyID")then if i:FindFirstChild("Using").Visible then if O(K)==i.Frame.Icon.Image then M=i:FindFirstChild("onlyID").Value end else for b,R in next,i.Frame.Stroke:GetChildren()do if R.Name=="\230\169\153"then R.Color=game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]["4"].Stroke.Color end;if R.Name~="UICorner"and Q(R.Color)and Q(R.Color)<=B[L]then table.insert(N,i:FindFirstChild("onlyID").Value)end end end else y.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=true;repeat task.wait()until i:FindFirstChild("onlyID")y.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=false end end end;return M,N end;local S=loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Orion/main/source'))()local T=S:MakeWindow({Name="Latai X Hub",HidePremium=true,SaveConfig=true,ConfigFolder="LataiXHub"})S:MakeNotification({Name="LataiXHub",Content="It's still in beta.",Image="",Time=10})local U=T:MakeTab({Name="MAIN",Icon="rbxassetid://13313903300",PremiumOnly=false})local V=U:AddSection({Name="Main"})U:AddParagraph(game:GetService("MarketplaceService"):GetProductInfo(game.PlaceId).Name:gsub("^%l",string.upper),"Now you can farm only 1-60 levels")U:AddToggle({Name="Farm",Default=true,Callback=function(i)_G.Farm=i end})U:AddToggle({Name="Ui About Everything",Default=false,Callback=function(i)if i then for b,i in next,game.CoreGui:GetChildren()do if i.Name=="LataiXHub"then i.Enabled=true end end else for b,i in next,game.CoreGui:GetChildren()do if i.Name=="LataiXHub"then i.Enabled=false end end end end})task.spawn(function()while wait()do if game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\167\176\229\143\183"].Frame.Right.ScrollPet["20000008"].Frame.Unlock.Visible==false then _G.Title=true end;if game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\167\176\229\143\183"].Frame.Right.ScrollPet["20000008"].Frame.Unlock.Visible==true then pcall(function()game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\232\163\133\229\164\135\231\167\176\229\143\183",20000008)end)_G.Auto=true;_G.Title=false;game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\167\176\229\143\183"].Visible=false end end end)task.spawn(function()while wait()do if _G.Title and y.PlayerGui.ScreenGui["\233\128\154\229\133\179\231\187\147\231\174\151"].Visible==true then local W=game:GetService("TeleportService")local x=game:GetService("Players")local X=x.LocalPlayer;local Y=coroutine.create(function()local Z,_=pcall(function()W:Teleport(game.PlaceId,X)end)if _ and not Z then warn(_)end end)coroutine.resume(Y)end end end)task.spawn(function()while wait()do if _G.Title and _G.Farm then game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\138\160\229\133\165\231\187\132\233\152\159\230\136\191\233\151\180","\231\139\172\232\135\170\229\141\135\231\186\167\229\137\175\230\156\172")for b,i in next,workspace["\229\137\175\230\156\172\229\156\176\229\155\190"]:GetChildren()do for b,a0 in next,i.Players:GetChildren()do if a0.Value==game.Players.LocalPlayer.UserId then if i["\229\156\176\229\155\190"]:FindFirstChild("Enemy")then for b,a1 in next,i["\229\156\176\229\155\190"].Enemy:GetChildren()do if a1:IsA("Folder")then for b,a2 in next,a1:GetChildren()do if a2:FindFirstChild("HumanoidRootPart")and a2:FindFirstChild("NPC")then for b,i in next,a2:GetDescendants()do a2.Humanoid.Health=0 end end end end end end end end end end end end)task.spawn(function()while wait(0.5)do if _G.Title and _G.Farm then pcall(function()game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame*CFrame.new(0,100,0)end)end end end)task.spawn(function()while task.wait(2)do if _G.Auto and _G.Farm then for b,i in next,workspace["\229\137\175\230\156\172\229\156\176\229\155\190"]:GetChildren()do for b,a0 in next,i.Players:GetChildren()do if a0.Value==y.UserId then if i["\229\156\176\229\155\190"]:FindFirstChild("Enemy")then for b,a1 in next,i["\229\156\176\229\155\190"].Enemy:GetChildren()do if a1:IsA("Folder")then for b,a2 in next,a1:GetChildren()do if a2:FindFirstChild("HumanoidRootPart")and a2:FindFirstChild("NPC")then local v={[1]={["phsic"]={["Power"]=1.42640686035156,["Time"]=0.15,["Dir"]=Vector3.new(-0.08174365013837814,0.7071067690849304,-0.702366054058075)},["damage"]=nil,["castPercent"]=nil,["hitID"]=nil,["isSetNetworkOwnerEnemy"]=true,["skillID"]=nil},[2]=a2.Name}for h=1,45 do w:WaitForChild("Msg"):WaitForChild("HitEvent"):FireServer(unpack(v))end end end end end end end end end end end end)task.spawn(function()while wait()do if _G.Auto and _G.Farm then pcall(function()Level()w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\138\160\229\133\165\231\187\132\233\152\159\230\136\191\233\151\180",tostring(Dun))w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\230\138\149\231\165\168\233\154\190\229\186\166",tonumber(LvDun))if y.PlayerGui.ScreenGui["\233\128\154\229\133\179\231\187\147\231\174\151"].Visible==true then w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\128\128\229\135\186\229\137\175\230\156\172")y.PlayerGui.ScreenGui["\233\128\154\229\133\179\231\187\147\231\174\151"].Visible=false end;if game:GetService("Players").LocalPlayer.PlayerGui.TipsGui.TipsFrame.Visible==true then game:GetService("Players").LocalPlayer.PlayerGui.TipsGui.TipsFrame.Visible=false end;w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack({[1]="\229\177\158\230\128\167\231\130\185\229\138\160\231\130\185",[2]={["attr"]="1",["addonce"]=1}}))w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150\229\143\140\229\128\141\231\187\143\233\170\140")w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150NPC\228\187\187\229\138\161")w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150NPC\228\187\187\229\138\161\229\165\150\229\138\177")game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\142\169\230\179\149"].Visible=false end)end end end)spawn(function()while task.wait(10)do if _G.Auto and _G.Farm then local a3,N=J("Weapon","dark violet and below")w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\232\163\133\229\164\135\229\188\186\229\140\150",{["MainID"]=a3,["OtherVt"]=N})end end end)task.spawn(function()while wait()do if _G.Auto and _G.Farm then for h,i in next,y.DropFolder:GetChildren()do w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\230\139\190\229\143\150\231\137\169\229\147\129",{[1]=tonumber(i.Name),[2]=i:GetAttribute("DropNum"),[3]=i:GetAttribute("Identification")})end end end end)task.spawn(function()while wait(600)do game.Players.LocalPlayer.Character:BreakJoints()end end)spawn(function()while task.wait(4)do if _G.Auto and _G.Farm then Level()local a4=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if a4<60 then local F=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text;local I=E(F)if I>=tonumber(NumC)then local v={[1]=tonumber(NumW),[2]=tonumber(Numm)}w:WaitForChild("Msg"):WaitForChild("DrawWeapon"):InvokeServer(unpack(v))end end end end end)task.spawn(function()while wait(1)do w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\232\163\133\229\164\135\230\156\128\228\189\179\232\163\133\229\164\135")w:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150\230\175\143\230\151\165\229\165\150\229\138\177")pcall(function()for b,i in pairs(game.Players.LocalPlayer.PlayerGui.ScreenGui["\228\187\187\229\138\161"].Frame["\228\187\187\229\138\161\229\136\151\232\161\168"]:GetDescendants())do if tonumber(i.Name)then local v={[1]="\233\162\134\229\143\150\228\187\187\229\138\161\229\165\150\229\138\177",[2]=tostring(i:GetAttribute("onlyID"))}game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack(v))end end end)end end)skill=false;task.spawn(function()while wait(0.5)do if _G.Auto and _G.Farm then local a5=tonumber(game.Players.LocalPlayer.leaderstats.Level.Value)if a5>=32 and a5<=35 and skill==false then for h=1,5 do game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\141\135\231\186\167\230\138\128\232\131\189",{["WeaponTp"]=2,["SkillID"]=1})end;skill=true end end end end)task.spawn(function()while wait(1)do pcall(function()local v={[1]="\232\163\133\229\164\135\229\133\137\231\142\175",[2]=21000006}game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack(v))end)end end)_G.AntiAFK=true;while _G.AntiAFK do task.wait(60)local a6=game:service"VirtualUser"game:service"Players".LocalPlayer.Idled:connect(function()a6:CaptureController()a6:ClickButton2(Vector2.new())end)end;game:GetService("GuiService").ErrorMessageChanged:Connect(function()wait()game:GetService("TeleportService"):Teleport(game.PlaceId,game:GetService("Players").LocalPlayer)end)
