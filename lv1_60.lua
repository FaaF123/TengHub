spawn(function()while true do local a=true;local b=game;local c=b.Workspace;local d=b.Lighting;local e=c.Terrain;e.WaterWaveSize=0;e.WaterWaveSpeed=0;e.WaterReflectance=0;e.WaterTransparency=0;d.GlobalShadows=false;d.FogEnd=9e9;d.Brightness=0;settings().Rendering.QualityLevel="Level01"for f,g in pairs(b:GetDescendants())do if g:IsA("Part")or g:IsA("Union")or g:IsA("CornerWedgePart")or g:IsA("TrussPart")then g.Material="Plastic"g.Reflectance=0 elseif g:IsA("Decal")or g:IsA("Texture")and a then g.Transparency=1 elseif g:IsA("ParticleEmitter")or g:IsA("Trail")then g.Lifetime=NumberRange.new(0)elseif g:IsA("Explosion")then g.BlastPressure=1;g.BlastRadius=1 elseif g:IsA("Fire")or g:IsA("SpotLight")or g:IsA("Smoke")or g:IsA("Sparkles")then g.Enabled=false elseif g:IsA("MeshPart")then g.Material="Plastic"g.Reflectance=0;g.TextureID=10385902758728957 end end;for f,h in pairs(d:GetChildren())do if h:IsA("BlurEffect")or h:IsA("SunRaysEffect")or h:IsA("ColorCorrectionEffect")or h:IsA("BloomEffect")or h:IsA("DepthOfFieldEffect")then h.Enabled=false end end;wait(900)end end)spawn(function()for i,g in next,game.workspace:GetDescendants()do if g.Name=="Egg"and g.ClassName=="MeshPart"then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=g.CFrame;task.wait(0.4)for i,j in next,g:GetChildren()do if j.ClassName=="ProximityPrompt"then fireproximityprompt(j)end end end end end)local function k()for i,g in next,game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.Right:GetDescendants()do if g.Name=="\228\187\187\229\138\161\229\144\141\231\167\176"then return g.Text end end end;local function l()for i,g in next,game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.Right:GetDescendants()do if g.Name=="\232\191\155\229\186\166"then return g.Text end end end;local function m()for i,g in pairs(game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BUFF:GetDescendants())do if g.Name=="timeText"then return g.Text end end end;spawn(function()local n=Instance.new("ScreenGui")n.Name="LataiXHub"n.Parent=game.CoreGui;_G.textLabel=Instance.new("TextLabel")_G.textLabel.AnchorPoint=Vector2.new(0.5,0)_G.textLabel.Position=UDim2.new(0.5,0,0,0)_G.textLabel.Size=UDim2.new(0,650,0,150)_G.textLabel.Font=Enum.Font.Cartoon;_G.textLabel.TextSize=24;_G.textLabel.TextColor3=Color3.new(1,1,1)_G.textLabel.BackgroundColor3=Color3.new(0,0,0)_G.textLabel.BackgroundTransparency=0.2;_G.textLabel.Parent=n;while wait(1)do local Level=game.Players.LocalPlayer.leaderstats.Level.Value;local o=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main["UpLeft\230\137\139\230\156\186"]["\231\187\143\233\170\140"].Text.Text;local p=m()or"Not Have"local k=k()or"Not Have"local l=l()or"Not Have"_G.textLabel.Text="Level: "..Level.."\nXP: "..o.."\nCoins: "..game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text.."| Gems: "..game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Diamond.Label.Text.."\nEXP Time: "..p.."\nQuest: "..k.." ("..l..")"end end)_G.Fr=true;spawn(function()while _G.Fr do task.wait(0.1)game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]["\231\129\176\232\137\178\230\140\137\233\146\174"]:Destroy()_G.Fr=false end end)spawn(function()local function q(r)local s={[1]=r}game:GetService("ReplicatedStorage"):WaitForChild("ServerMsg"):WaitForChild("Code"):InvokeServer(unpack(s))end;q("NEWHERO")q("PVPUPDATE")q("ENCHANTINGUPDATE")q("DISCORD")q("BOOSTGIFT")q("GEMGIFT")q("GOLDGIFT")q("FREEGIFT")q("NEWGAME")q("NEWGAME2")q("WEEKENDGIFT1")q("WEEKENDGIFT2")q("AURAUPDATE")q("LEOPARD")game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\228\187\187\229\138\161"].Visible=true;game.Players.LocalPlayer.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=true end)local t=game:GetService("ReplicatedStorage")local u=game.Players;local v=game.Players.LocalPlayer;local w=v.Character;local x=w.HumanoidRootPart;local y={["white"]=1,["blue and below"]=2,["purple and below"]=3,["yellow and below"]=4,["radical red and below"]=5,["rainbow and below"]=6,["dark violet and below"]=7}function Level()local z=tonumber(game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text)local A=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if A==1 and A<=9 then Dun="1_1"LvDun=1;NumW=7000001;Numm=1;NumC=200 elseif A>=10 and A<=14 then Dun="1_1"LvDun=2;NumW=7000001;Numm=1;NumC=200 elseif A>=15 and A<=19 then Dun="1_1"LvDun=3;NumW=7000001;Numm=1;NumC=200 elseif A>=20 and A<=23 then Dun="1_2"LvDun=1;NumW=7000011;Numm=1;NumC=1000 elseif A>=24 and A<=27 then Dun="1_2"LvDun=2;NumW=7000011;Numm=1;NumC=1000 elseif A>=28 and A<=39 then Dun="1_2"LvDun=3;NumW=7000011;Numm=1;NumC=1000 elseif A>=40 and A<=42 then Dun="1_3"LvDun=1;NumW=7000021;Numm=1;NumC=5000 elseif A>=43 and A<=45 then Dun="1_3"LvDun=2;NumW=7000021;Numm=1;NumC=5000 elseif A>=46 and A<=48 then Dun="1_3"LvDun=3;NumW=7000021;Numm=1;NumC=5000 elseif A>=49 and A<=60 then Dun="1_3"LvDun=4;NumW=7000021;Numm=1;NumC=5000 end end;task.spawn(function()while wait(1)do local A=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if A>=60 then game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\142\187\229\136\171\231\154\132\228\184\150\231\149\140",2)end end end)local function B(C)local D=1;if string.find(C,"K")then D=1000 elseif string.find(C,"M")then D=1000000 elseif string.find(C,"B")then D=1000000000 end;local E=string.gsub(C,"[KMB]","")local F=tonumber(E)*D;return math.floor(F)end;local function G(H,I)local H=H;local I=I;local J;local K={}local function L(h)for i,M in next,v.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Frame["\229\189\147\229\137\141\232\163\133\229\164\135"]:GetChildren()do if M:FindFirstChild("PosName")and M:FindFirstChild("PosName").Text==h then return M.Frame.Icon.Image end end end;local function N(h)for f,g in next,game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]:GetChildren()do if g:FindFirstChild("Stroke")and g.Stroke.Color==h then return tonumber(g.Name)end end end;for f,g in next,v.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Frame.Bag.ScrollPet:GetChildren()do if g.Name=="Temp"then if g:FindFirstChild("onlyID")then if g:FindFirstChild("Using").Visible then if L(H)==g.Frame.Icon.Image then J=g:FindFirstChild("onlyID").Value end else for i,O in next,g.Frame.Stroke:GetChildren()do if O.Name=="\230\169\153"then O.Color=game:GetService("ReplicatedStorage")["\230\173\166\229\153\168\231\168\128\230\156\137\229\186\166\230\184\144\229\143\152\232\137\178"]["4"].Stroke.Color end;if O.Name~="UICorner"and N(O.Color)and N(O.Color)<=y[I]then table.insert(K,g:FindFirstChild("onlyID").Value)end end end else v.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=true;repeat task.wait()until g:FindFirstChild("onlyID")v.PlayerGui.ScreenGui["\230\173\166\229\153\168"].Visible=false end end end;return J,K end;local P=loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Orion/main/source'))()local Q=P:MakeWindow({Name="Latai X Hub",HidePremium=true,SaveConfig=true,ConfigFolder="LataiXHub"})P:MakeNotification({Name="LataiXHub",Content="It's still in beta.",Image="",Time=10})local R=Q:MakeTab({Name="MAIN",Icon="rbxassetid://13313903300",PremiumOnly=false})local S=R:AddSection({Name="Main"})R:AddParagraph(game:GetService("MarketplaceService"):GetProductInfo(game.PlaceId).Name:gsub("^%l",string.upper),"Now you can farm only 1-60 levels")R:AddToggle({Name="Farm",Default=true,Callback=function(g)_G.Auto=g end})R:AddToggle({Name="Ui About Everything",Default=false,Callback=function(g)if g then for i,g in next,game.CoreGui:GetChildren()do if g.Name=="LataiXHub"then g.Enabled=true end end else for i,g in next,game.CoreGui:GetChildren()do if g.Name=="LataiXHub"then g.Enabled=false end end end end})task.spawn(function()while task.wait(2)do if _G.Auto then for i,g in next,workspace["\229\137\175\230\156\172\229\156\176\229\155\190"]:GetChildren()do for i,T in next,g.Players:GetChildren()do if T.Value==v.UserId then if g["\229\156\176\229\155\190"]:FindFirstChild("Enemy")then for i,U in next,g["\229\156\176\229\155\190"].Enemy:GetChildren()do if U:IsA("Folder")then for i,V in next,U:GetChildren()do if V:FindFirstChild("HumanoidRootPart")and V:FindFirstChild("NPC")then local s={[1]={["phsic"]={["Power"]=1.42640686035156,["Time"]=0.15,["Dir"]=Vector3.new(-0.08174365013837814,0.7071067690849304,-0.702366054058075)},["damage"]=nil,["castPercent"]=nil,["hitID"]=nil,["isSetNetworkOwnerEnemy"]=true,["skillID"]=nil},[2]=V.Name}for f=1,45 do t:WaitForChild("Msg"):WaitForChild("HitEvent"):FireServer(unpack(s))end end end end end end end end end end end end)task.spawn(function()while wait()do if _G.Auto then pcall(function()Level()t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\138\160\229\133\165\231\187\132\233\152\159\230\136\191\233\151\180",tostring(Dun))t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\230\138\149\231\165\168\233\154\190\229\186\166",tonumber(LvDun))if v.PlayerGui.ScreenGui["\233\128\154\229\133\179\231\187\147\231\174\151"].Visible==true then t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\128\128\229\135\186\229\137\175\230\156\172")v.PlayerGui.ScreenGui["\233\128\154\229\133\179\231\187\147\231\174\151"].Visible=false end;if game:GetService("Players").LocalPlayer.PlayerGui.TipsGui.TipsFrame.Visible==true then game:GetService("Players").LocalPlayer.PlayerGui.TipsGui.TipsFrame.Visible=false end;t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack({[1]="\229\177\158\230\128\167\231\130\185\229\138\160\231\130\185",[2]={["attr"]="1",["addonce"]=1}}))t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150\229\143\140\229\128\141\231\187\143\233\170\140")t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150NPC\228\187\187\229\138\161")t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150NPC\228\187\187\229\138\161\229\165\150\229\138\177")game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui["\231\142\169\230\179\149"].Visible=false end)end end end)spawn(function()while task.wait(10)do if _G.Auto then local W,K=G("Weapon","dark violet and below")t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\232\163\133\229\164\135\229\188\186\229\140\150",{["MainID"]=W,["OtherVt"]=K})end end end)task.spawn(function()while wait()do if _G.Auto then for f,g in next,v.DropFolder:GetChildren()do t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\230\139\190\229\143\150\231\137\169\229\147\129",{[1]=tonumber(g.Name),[2]=g:GetAttribute("DropNum"),[3]=g:GetAttribute("Identification")})end end end end)task.spawn(function()while wait(600)do if _G.Auto then game.Players.LocalPlayer.Character:BreakJoints()end end end)spawn(function()while task.wait(4)do if _G.Auto then Level()local X=tonumber(game:GetService("Players").LocalPlayer.leaderstats.Level.Value)if X<60 then local C=game:GetService("Players").LocalPlayer.PlayerGui.ScreenGui.Main.BottomLeft.Coins.Label.Text;local F=B(C)if F>=tonumber(NumC)then local s={[1]=tonumber(NumW),[2]=tonumber(Numm)}t:WaitForChild("Msg"):WaitForChild("DrawWeapon"):InvokeServer(unpack(s))end end end end end)task.spawn(function()while wait(1)do t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\232\163\133\229\164\135\230\156\128\228\189\179\232\163\133\229\164\135")t:WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\233\162\134\229\143\150\230\175\143\230\151\165\229\165\150\229\138\177")pcall(function()for i,g in pairs(game.Players.LocalPlayer.PlayerGui.ScreenGui["\228\187\187\229\138\161"].Frame["\228\187\187\229\138\161\229\136\151\232\161\168"]:GetDescendants())do if tonumber(g.Name)then local s={[1]="\233\162\134\229\143\150\228\187\187\229\138\161\229\165\150\229\138\177",[2]=tostring(g:GetAttribute("onlyID"))}game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack(s))end end end)end end)skill=false;task.spawn(function()while wait(0.5)do local Y=tonumber(game.Players.LocalPlayer.leaderstats.Level.Value)if Y>=32 and Y<=35 and skill==false then for f=1,5 do game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer("\229\141\135\231\186\167\230\138\128\232\131\189",{["WeaponTp"]=2,["SkillID"]=1})end;skill=true end end end)task.spawn(function()while wait(1)do pcall(function()local s={[1]="\232\163\133\229\164\135\229\133\137\231\142\175",[2]=21000006}game:GetService("ReplicatedStorage"):WaitForChild("Msg"):WaitForChild("RemoteFunction"):InvokeServer(unpack(s))end)end end)_G.AntiAFK=true;while _G.AntiAFK do task.wait(60)local Z=game:service"VirtualUser"game:service"Players".LocalPlayer.Idled:connect(function()Z:CaptureController()Z:ClickButton2(Vector2.new())end)end;game:GetService("GuiService").ErrorMessageChanged:Connect(function()wait()game:GetService("TeleportService"):Teleport(game.PlaceId,game:GetService("Players").LocalPlayer)end)
